import connect from '@/utils/db'
import { NextResponse } from "next/server";
import Topic from "@/models/topic.model";


export const PUT = async (request, {params}) => {
const {id} = params;
const {newTitle: title, newDescription: description} = await request.json();
await connect();
await Topic.findByIdAndUpdate(id, {title, description})
return NextResponse.json({message: 'Topic updated'}, {status: 200})
}

export const GET = async (request, {params}) => {
    const { id } = params;
    await connect();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status: 200});
}