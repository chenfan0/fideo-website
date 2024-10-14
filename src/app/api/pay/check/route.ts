import { getCollection } from "@/app/db/mongo";
import redis from "@/app/redis/redis";
import { getHash, nowDate, genRandomString } from "@/app/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({
      code: 0,
      data: {},
    });
  }

  const { orderId } = body;

  const params: Record<string, any> = {
    appid: process.env.HU_PI_JIAO_APP_ID!,
    open_order_id: orderId,
    time: nowDate(),
    nonce_str: genRandomString(),
  };

  const hash = getHash(params, process.env.HU_PI_JIAO_APP_SECRET!);
  params.hash = hash;

  const { data } = await axios
    .post("https://api.xunhupay.com/payment/query.html", params)
    .catch((err) => {
      console.log("/api/pay/check error: ", err);
      return { data: {} };
    });
  console.log("data", data);

  if (data.errcode === 0 && data.data.status === "OD") {
    let code = await redis.get(`orderId:${orderId}`).catch(() => null);

    if (!code) {
      const codeCollection = await getCollection("code");
      const { code: codeData, expireTime } =
        (await codeCollection.findOne({ orderId })) || {} as any;
      if (expireTime && expireTime < dayjs().valueOf()) {
        codeCollection.deleteOne({ orderId });
      } else {
        code = codeData;
      }
    }

    if (code) {
      return NextResponse.json({
        code: 200,
        data: {
          code,
        },
      })
    }
  }

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");

  return NextResponse.json({
    code: 0,
    data: {},
  });
}
