import { connect } from '@/dbConfig/dbConfig';
import { getUserFromToken } from '@/helpers/getCustomTokenFromToken';
import { NextRequest, NextResponse } from 'next/server';
import { Readable } from "stream";
import requestfile from "@/models/201filesrequestSchema";

connect();
export async function GET(request: NextRequest) {
  try {
    
    const req = await request.json();
    const { originalname, mimetype, buffer } = req.file;

    // Process the file as needed (e.g., save to a storage service)

    // Update the database with file information
    const userId = await getUserFromToken(req);
    const userData = await requestfile.findOne({ employee_id: userId });

    if (!userData) {
      return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
    }

    // Assuming you have a field in your schema to store the file information
    userData.fileInfo = {
      filename: originalname,
      contentType: mimetype,
      data: buffer,
    };

    await userData.save();

    return NextResponse.json({ message: "File uploaded and database updated successfully!", success: true });
  } catch (error: any) {
    console.error('Internal Server Error:',error);
    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
  }
};
