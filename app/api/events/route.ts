import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const formData = await req.formData();

        let event;

        try {
            event = Object.fromEntries(formData.entries());  
        } catch (error) {
            return NextResponse.json({ message: 'Invalid form data' }, { status: 400 });   
        }

        const createdEvent = await Event.create(event);
        return NextResponse.json({ message: 'Event created successfully', event: createdEvent }, { status: 201 });

        
    } catch (e) {
        return NextResponse.json({ message: 'Internal Server Error' , error: e instanceof Error ? e.message : 'Unknown error'}, { status: 500 });
    }
}