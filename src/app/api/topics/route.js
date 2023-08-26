import Topic from '@/models/topic.model'
import connect  from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (request) => {   
const {title, description} = await request.json()
await connect()
await Topic.create({title, description})
return NextResponse.json({message: 'Topic has created!'}, {status: 201})
}

export const GET = async (request) => {
await connect();
const topics = await Topic.find();
return NextResponse.json({topics});
}

export const DELETE = async (request) => {
    const id = request.nextUrl.searchParams.get('id');
    await connect()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message: 'Topic has deleted'}, {status: 200})
}

