import { connect } from "@/dbConfig/dbConfig";
import updated from "@/models/updateduserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import userinformation from "@/models/userinformation"
import { sendEmail } from "@/helpers/mailer";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, employee_id, password, phone, address, position, daysofWork, rateperDay } = reqBody;
    const now = new Date();
    const offset = 8; // Philippines timezone offset in hours
    const philippinesTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
    const date = philippinesTime.toISOString().split('T')[0];
    const user = await updated.findOne({email});
        if(user){
            return NextResponse.json({error: "Email already exists"}, {status: 400})
        }
  //hash password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  const newUser = new updated({
    name: name,
    email: email,
    employee_id: employee_id,
    password: hashedPassword,
  });
  
  const userinfo = new userinformation({
    EmployeeInformation: {
        name: name,
        employee_id: employee_id,
        phone: phone,
        address: address,
        role: position,
    },
    PayInformation: {
        days: daysofWork,
        rate: rateperDay,
    },
    datecreated: date,
});
  const savedUser = await newUser.save();
  const savedInfo = await userinfo.save();
  await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
      return NextResponse.json({
        message: "User created successfully!",
        success: true,
        savedUser,
        savedInfo,
        }, {status:201})
          } catch (error: any) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
