import { getUserFromToken } from '@/helpers/getUserFromToken';
import { NextRequest, NextResponse } from 'next/server';
import updated from '@/models/updateduserSchema';
import { connect } from '@/dbConfig/dbConfig';
import userinformation from '@/models/userinformation';


connect();

export async function GET(request: NextRequest) {
	try {
        const userId = await getUserFromToken(request);
        const userData = await updated.findOne({_id:userId}).select("-password")		
        return NextResponse.json({message: "Successfully retrieve user data", success: true, user: userData});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}
