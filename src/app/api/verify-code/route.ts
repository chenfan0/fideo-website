import { NextRequest, NextResponse } from "next/server";

import { getCollection } from "@/app/db/mongo";


export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  const collection = await getCollection("code");
  const items = await collection.findOne({ code });

  if (!items) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json({});
}
