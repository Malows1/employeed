import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import employeePayslip from "@/models/payslipSchema"
import userinformation from "@/models/userinformation";
import bundy from "@/models/bundyclockSchema";
import { Days_One } from "next/font/google";
connect();

export async function POST(request: NextRequest) {
  try {
    const now = new Date();
    const offset = 8; // Philippines timezone offset in hours
    const philippinesTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
    const date = philippinesTime.toISOString().split('T')[0];
    const reqBody = await request.json();
    const { name, employee_id, role, salary, overtime, grossearnings, tax, pagibig, philhealth, sss, totalcontribution, netpay, periodcovered, datecreated, days} = reqBody;
    const user = await employeePayslip.findOne({'employeeinformation.employee_id': employee_id, date: date})
    if(user){
      return NextResponse.json({error: "Payslip already submitted"}, {status: 400})
    }
    const information = new employeePayslip({
      employeeinformation: {
          name: name,
          employee_id: employee_id,
          role: role,
      },
      taxableincome: {
          days: days,
          salary: salary,
          overtime: overtime,
          grossearnings: grossearnings, // assuming you want to calculate it based on salary and overtime
      },
      deduction: {
          tax: tax, // example value
          pagibig: pagibig,
          philhealth: philhealth,
          sss: sss,
          totalcontribution: totalcontribution, // example value
      },
      periodcovered: periodcovered,
      netpay: netpay, // example value
      date: datecreated, // current date
  });
  
  // Save the instance to the database
  const savePayslip = await information.save();
  console.log(savePayslip);
  
      return NextResponse.json({
        message: "Payslip created successfully!",
        success: true,
        savePayslip,
        }, {status:201})
          } catch (error: any) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET(request: NextRequest) {
	const now = new Date();
        const offset = 8; // Philippines timezone offset in hours
        const philippinesTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
        const formattedDate = philippinesTime.toISOString().split('T')[0];
        const fifteenDaysAgo = new Date(philippinesTime);
        fifteenDaysAgo.setDate(philippinesTime.getDate() - 15);
        const searchQuery = request.nextUrl.searchParams.get('employee_id') || "";
        console.log("Search Query:", searchQuery);
        
        const searchFilter = {
            $and: [
                { employee_id: searchQuery },
                {  date: { $gte: fifteenDaysAgo, $lte: philippinesTime },}
            ]
        };
	try {
		const userDataArray = await userinformation.find();

		console.log("Search Filter:", searchFilter);

        const userBundy = await bundy.find(searchFilter,);
        console.log("User Bundy:", userBundy);

        let daysWithBothInOut = 0;

        userBundy.forEach(user => {
            const timeIn = user.time_in;
            const timeOut = user.time_out;

            // Check if both time_in and time_out are present
            if (timeIn && timeOut) {
                daysWithBothInOut++;
            }
        });

		return NextResponse.json({ message: "Successfully retrieve user data", success: true, user: userDataArray, days: daysWithBothInOut,  data: userBundy});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });

	}
}

