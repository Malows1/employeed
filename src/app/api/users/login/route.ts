import { connect } from '@/dbConfig/dbConfig';
import update from '@/models/updateduserSchema';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
connect();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { name, password } = reqBody;
		console.log(reqBody);
		//Check if user exist or not
		const users = await update.findOne({ name });	
		
		if (!users) {
			return NextResponse.json(
				{ error: 'User does not exist' },
				{ status: 400 }
			);
			
		}	
		//Check if the password is correct
		const validPassword = await bcryptjs.compare(password, users.password);
		if (!validPassword) {
			return NextResponse.json({ error: 'Invalid Password' }, { status: 400 });
		}	
		//create jsonwebtoken data
		const tokenData = {
			id: users._id,
			custom_id: users.employee_id,
			username: users.name,
			email: users.name,
		};	
		//create token
		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: '1d',
		});

		//set the cookie
		const response = NextResponse.json({
			message: 'Login Successful',
			success: true,
		});
		response.cookies.set('token', token, { httpOnly: true });
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
