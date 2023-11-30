import { connect } from '@/dbConfig/dbConfig';
import { getUserFromToken } from '@/helpers/getCustomTokenFromToken';
import { NextRequest, NextResponse } from 'next/server';
import bundy from '@/models/bundyclockSchema';

connect();

export async function GET(request: NextRequest) {
  try {
    // Sort the data in ascending order based on a timestamp (assuming a "timestamp" field)
    const userBundy = await bundy.find().sort({date: -1});

    console.log(userBundy);

    return NextResponse.json({
      message: 'Successfully retrieve user data',
      success: true,
      admin: userBundy,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
