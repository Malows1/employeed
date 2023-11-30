import { getUserFromToken } from '@/helpers/getCustomTokenFromToken';
import { NextRequest, NextResponse } from 'next/server';
import employeePayslip from '@/models/payslipSchema';
import { connect } from '@/dbConfig/dbConfig';

connect();

export async function GET(request: NextRequest) {
        const dateQuery = request.nextUrl.searchParams.get('date') || "";
        const periodQuery = request.nextUrl.searchParams.get('periodcovered') || "";
        const userId = await getUserFromToken(request);
        console.log(dateQuery, periodQuery, userId);
        const searchFilter = {
                $and: [
                  { 'employeeinformation.employee_id': userId },
                  { date: dateQuery }, // Add the date filter
                  { periodcovered: periodQuery } // Add the period filter
                ]
              };
	try {
		const userDataArray = await employeePayslip.findOne(searchFilter);
                console.log(userDataArray);
		return NextResponse.json({ message: "Successfully retrieve user data", success: true, payslip: userDataArray,});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });

	}
}