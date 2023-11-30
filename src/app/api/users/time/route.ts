import {connect} from '@/dbConfig/dbConfig';
import { getUserFromToken } from '@/helpers/getCustomTokenFromToken';
import { NextRequest, NextResponse } from 'next/server';
import bundy from "@/models/bundyclockSchema"
connect();
export async function GET(request: NextRequest) {
	try {
        const now = new Date();
        const offset = 8; // Philippines timezone offset in hours
        const philippinesTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
        const date = philippinesTime.toISOString().split('T')[0];
        const userId = await getUserFromToken(request);
        const userBundy = await bundy.find({employee_id: userId})
        
        let daysWithBothInOut = 0;
        
        userBundy.forEach(user => {
            const timeIn = user.time_in;
            const timeOut = user.time_out;

            // Check if both time_in and time_out are present
            if (timeIn && timeOut) {
                daysWithBothInOut++;
            }
        });
        return NextResponse.json({message: "Successfully retrieve user data", success: true, user: userBundy, totaldays: daysWithBothInOut,});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
        
	}
}