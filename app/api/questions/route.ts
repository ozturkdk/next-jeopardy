import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("jeopardy-db");
    const questions = await db.collection("questions").find().toArray();
    return NextResponse.json(questions);
}