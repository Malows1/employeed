import {connect} from '@/dbConfig/dbConfig';
import { getUserFromToken } from '@/helpers/getCustomTokenFromToken';
import { NextRequest, NextResponse } from 'next/server';
import employeeinformation from "@/models/personalinfo"

connect();
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const { religion, birthplace, status, address, gender, phone, father, mother, siblings, father_attainment, mother_attainment, father_occupation, mother_occupation} = reqBody;
		const userId = await getUserFromToken(request);
        const userData = await employeeinformation.findOne({employee_id:userId})
        if(!userData){
            return NextResponse.json({error: "Invalid Request"}, {status: 400})
        }
        
        userData.religion = religion;
        userData.birthplace = birthplace;
        userData.status = status;
        userData.address = address;
        userData.gender = gender;
        userData.phone = phone;
        userData.father = father;
        userData.mother = mother;
        userData.siblings = siblings;
        userData.father_attainment = father_attainment;
        userData.mother_attainment = mother_attainment;
        userData.father_occupation = father_occupation;
        userData.mother_occupation = mother_occupation;
        await userData.save();

        return NextResponse.json({message: "Personal information updated successfully!", success: true})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


