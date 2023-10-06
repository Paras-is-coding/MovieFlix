import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req,res){ // next POST handler inside route.js
    try {
        const payload = await req.json(); // getting data from route
        await dbConn();
        await Contact.create(payload);

        // next way to send response
        return NextResponse.json({
            message:"Message sent successfully"
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message:"Server error! Please try again."
        },{
            status:500
        }
        )
    }}
