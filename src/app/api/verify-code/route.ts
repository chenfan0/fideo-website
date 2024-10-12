import { NextRequest, NextResponse } from "next/server";

import { getCollection } from "@/app/db/mongo";
import redis from "@/app/redis/redis";
import dayjs from "dayjs";


export async function GET(request: NextRequest) {
  // 这个接口是给 web.fideo.site 用来校验的，所以这里状态码是 404

  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  console.log('code: ', code)

  if (!code) {
    return NextResponse.json({}, { status: 404 });
  }

  let alreadyExist = await redis.get(`code:${code}`).catch(() => null)

  console.log('redis result: ', alreadyExist)

  if (!alreadyExist) {
    const collection = await getCollection("code");
    alreadyExist = await collection.findOne({ code })
    console.log('mongo result: ', alreadyExist)

    if (alreadyExist) {
      const expireTime = (alreadyExist as any).expireTime

      if (expireTime && expireTime > dayjs().valueOf()) {
        console.log('set redis')
        alreadyExist = true
        redis.set(`code:${code}`, true, {
          ex: Math.floor((expireTime - dayjs().valueOf()) / 1000)
        })
      } else {
        console.log('delete mongo and redis')
        collection.deleteOne({ code })
        redis.del(`code:${code}`)
        alreadyExist = false
      }
    }
  }

  if (!alreadyExist) {
    return NextResponse.json({}, { status: 404 });
  }

  return NextResponse.json({});
}
