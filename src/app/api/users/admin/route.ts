import { connect } from '@/dbConfig/dbConfig';
import { getUserFromToken } from '@/helpers/getCustomTokenFromToken';
import { NextRequest, NextResponse } from 'next/server';
import bundy from '@/models/bundyclockSchema';
import userinformation from '@/models/userinformation';
import { info } from 'console';
connect();

export async function GET(request: NextRequest) {
  const employee_idQuery = request.nextUrl.searchParams.get('employee_id') || "";
  const nameQuery = request.nextUrl.searchParams.get('name') || "";
  let searchFilter = {};
  let informationFilter = {};
  console.log(searchFilter);
  if (employee_idQuery || nameQuery) {
    searchFilter = {
      $or: [
        { employee_id: new RegExp(employee_idQuery)},
        {name: new RegExp(nameQuery)},
      ]
    };
    informationFilter= {
      $or: [
        {'EmployeeInformation.employee_id': new RegExp(employee_idQuery)},
        {'EmployeeInformation.name': new RegExp(nameQuery)}
      ]
    }
  }
  try {
    // Sort the data in ascending order based on a timestamp (assuming a "timestamp" field)
    const userBundy = await bundy.find(searchFilter).sort({date: -1});
    const userData = await userinformation.findOne(informationFilter)
    console.log('this is the datas from userBundy variable',userBundy);

    return NextResponse.json({
      message: 'Successfully retrieve user data',
      success: true,
      admin: userBundy,
      adminData: userData,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
