import { connect } from "@/dbConfig/dbConfig";
import updateduser from "@/models/updateduserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import userinformation from "@/models/userinformation"
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, employee_id, password, phone, address, position, daysofWork, rateperDay } = reqBody;
    const now = new Date();
    const offset = 8; // Philippines timezone offset in hours
    const philippinesTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
    const date = philippinesTime.toISOString().split('T')[0];

  //hash password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  const newUser = new updateduser({
    name,
    employee_id,
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
