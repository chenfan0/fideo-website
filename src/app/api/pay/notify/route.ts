import { getHash, genRandomString } from "@/app/utils";
import { NextRequest, NextResponse } from "next/server";

import { nanoid } from "nanoid";

import dayjs from "dayjs";

import { getCollection } from "@/app/db/mongo";
import redis from "@/app/redis/redis";
import type { Collection } from "mongodb";
import { sgMail } from "@/app/sendgrid/sendgrid";

export async function POST(request: NextRequest) {
  try {
    // 获取formData
    const formData = (await request.formData()) || {};
    const data = Object.fromEntries(formData.entries());
    const appSecret = process.env.HU_PI_JIAO_APP_SECRET!;
    //验签
    if (data.hash !== getHash(data, appSecret)) {
      console.log("验签失败");
      return NextResponse.json("fail");
    }
    if (data.status === "OD") {
      console.log("wx notify data: ", data);

      const orderId = data.open_order_id;
      const attach = JSON.parse(data.attach as string);
      const email = attach.email!;

      let alreadyExist = await redis
        .get(`orderId:${orderId}`)
        .catch(() => null);

      let codeCollection: Collection<Record<string, any>>;
      if (!alreadyExist) {
        codeCollection = await getCollection("code");
        alreadyExist = await codeCollection.findOne({ orderId });
      }
      if (alreadyExist) return NextResponse.json("success");

      const code = nanoid();
      const expireTime = dayjs().add(1, "month").valueOf();

      const pip = redis.pipeline();
      pip.set(`orderId:${orderId}`, code, {
        ex: 60 * 10,
      });
      pip.set(`code:${code}`, true, {
        ex: Math.floor((expireTime - dayjs().valueOf()) / 1000),
      });
      pip.del(`paying:order:email:${email}`);

      pip.exec();

      sgMail
        .send({
          to: email,
          from: "contact.fideo@gmail.com",
          subject: "Fideo网页操作激活码",
          text: `
            您的激活码为：${code}
            有效期至：${dayjs(expireTime).format("YYYY-MM-DD HH:mm:ss")}
            请勿泄露激活码， 可能会导致激活码被禁用。如果有疑问请添加QQ群: 891116727
          `,
          html: `
            <p>您的激活码为：${code}</p>
            <p>有效期至：${dayjs(expireTime).format("YYYY-MM-DD HH:mm:ss")}</p>
            <p>请勿泄露激活码， 可能会导致激活码被禁用。如果有疑问请添加QQ群: 891116727</p>
          `,
        })
        .catch((err) => {
          console.log("email: ", email);
          console.log("code: ", code);
          console.log("/api/pay/wx/sendgrid error: ", err);
        });

      await codeCollection!.insertOne({
        orderId,
        code,
        expireTime,
      });
    }
    return NextResponse.json("success");
  } catch (e) {
    console.log("notify error", e);
  }
}
