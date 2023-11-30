import {connect} from '@/dbConfig/dbConfig';
import { getUserFromToken } from '@/helpers/getCustomTokenFromToken';
import { NextRequest, NextResponse } from 'next/server';
import employeeinformation from "@/models/personalinfo"

connect();
export async function GET(request: NextRequest) {
	try {
        const userId = await getUserFromToken(request);
        const userData = await employeeinformation.findOne({employee_id:userId})
        console.log('this is the user variable', userData);
        return NextResponse.json({message: "Successfully retrieve user data", success: true, user: userData});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}
export async function POST(request: NextRequest) {
        try {
            const reqBody = await request.json();
            const {
                employee_id,
                religion,
                birthplace,
                status,
                address,
                gender,
                phone,
                father_name,
                mother_name,
                sibling,
                father_attainment,
                mother_attainment,
                father_occupation,
                mother_occupation,
                tertiary,
                secondary,
                primary,
                height,
                weight,
                bloodtype,
                medicalhistory,
                skill,
                hobby,
            } = reqBody;
    
            const userId = await getUserFromToken(request);
            const userData = await employeeinformation.findOne({ employee_id: userId });
    
            if (!userData) {
                return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
            }
    
            // Update basic information
            userData.employee_id = employee_id;
            userData.basic.religion = religion;
            userData.basic.birthplace = birthplace;
            userData.basic.status = status;
            userData.basic.gender = gender;
            userData.basic.phone = phone;
    
            // Update address information
            userData.address = address;
    
            // Update family background
            userData.familybg.father_name = father_name;
            userData.familybg.mother_name = mother_name;
            userData.familybg.sibling = sibling;
            userData.familybg.father_attainment = father_attainment;
            userData.familybg.mother_attainment = mother_attainment;
            userData.familybg.father_occupation = father_occupation;
            userData.familybg.mother_occupation = mother_occupation;
    
            // Update educational background
            userData.educationalbg.tertiary = tertiary;
            userData.educationalbg.secondary = secondary;
            userData.educationalbg.primary = primary;
    
            // Update medical information
            userData.medical.height = height;
            userData.medical.weight = weight;
            userData.medical.bloodtype = bloodtype;
            userData.medical.medicalhistory = medicalhistory;
    
            // Update skill and hobby
            userData.skillandhobby.skill = skill;
            userData.skillandhobby.hobby = hobby;
    
            await userData.save();
    
            return NextResponse.json({ message: "Personal information updated successfully!", success: true });
        } catch (error: any) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
    