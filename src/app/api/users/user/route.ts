import { getUserFromToken } from '@/helpers/getUserFromToken';
import { NextRequest, NextResponse } from 'next/server';
import updated from '@/models/updateduserSchema';
import { connect } from '@/dbConfig/dbConfig';

connect();

export async function GET(request: NextRequest) {
	try {
        const userId = await getUserFromToken(request);
		console.log('this is what i am looking for bish ', userId);
        const userData = await updated.findOne({_id:userId}).select("-password")
        return NextResponse.json({message: "Successfully retrieve user data", success: true, user: userData})
		;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}
