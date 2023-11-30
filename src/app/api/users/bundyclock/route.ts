import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import bundy from '@/models/bundyclockSchema';

connect();

export async function POST(request: NextRequest) {
    try {
        const now = new Date();
        const offset = 8; // Philippines timezone offset in hours
        const philippinesTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
        const date = philippinesTime.toISOString().split('T')[0];
        const { employee_id, time } = await request.json();
        console.log('this is the bundy inserted',{ employee_id, time, date });

        // Get the current date
        

        // Find the document
        const result = await bundy.findOne({ employee_id, date: date });
        console.log(result)
        if (!result) {
            // If the user does not exist for the current date, create a new record
            const newRecord = new bundy({
                employee_id,
                time_in: time,
                time_out: null, // Initialize time_out to null
                date: date,
            });

            const savedRecord = await newRecord.save();
            return NextResponse.json({
                message: "User created successfully!",
                success: true,
                result: savedRecord,
            }, { status: 201 });
        } else {
            // If both time_in and time_out are already set, update only time_out
            if (result.time_in && result.time_out) {
                result.time_out = time;
            } else {
                // If time_in is not set, update time_in
                if (!result.time_in) {
                    result.time_in = time;
                } else {
                    // If time_in is already set, update time_out
                    result.time_out = time;
                }
            }

            const updatedRecord = await result.save();

            return NextResponse.json({
                message: "Time in/out updated successfully!",
                success: true,
                result: updatedRecord,
            }, { status: 200 });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
