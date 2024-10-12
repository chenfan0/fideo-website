import { NextRequest, NextResponse } from "next/server";

import axios from "axios";
import validator from 'validator'

import { genRandomString, nowDate, getHash } from "@/app/utils";

async function wxPay(options: any) {
  //发起支付的函数，直接写在发起支付的接口里面
  const params: Record<string, any> = {
    version: process.env.HU_PI_JIAO_VERSION,
    appid: process.env.HU_PI_JIAO_APP_ID, //填写虎皮椒的APPID
    trade_order_id: options.order_id, //商户订单号
    total_fee: options.money, //金额，最多两位小数
    title: options.title,
    time: nowDate(), //Math.floor(new Date().valueOf() / 1000);
    notify_url: options.notifyUrl, //通知回调网址,直接写一个通知接口,POST请求
    nonce_str: genRandomString(),
    type: "WAP",
    wap_url: "http://www.xunhupay.com",
    wap_name: "http://www.xunhupay.com",
    attach: options.attach
  };
  const hash = getHash(params, process.env.HU_PI_JIAO_APP_SECRET!);
  // 发送 POST 请求
  const requestParams = new URLSearchParams({
    ...params,
    hash,
  });

  return axios.post(
    "https://api.xunhupay.com/payment/do.html ",
    requestParams,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  const orderId = genRandomString()
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({
      code: 0,
      message: 'email is required'
    })
  }

  if (!validator.isEmail(email)) {
    return NextResponse.json({
      code: 0,
      message: 'email is invalid'
    })
  }

  const { data } = await wxPay({
    order_id: orderId,
    money: '0.01',
    title: "Fideo网页操作激活码(一个月)",
    notifyUrl: 'https://www.fideo.site/api/pay/notify',
    attach: JSON.stringify({ email })
  }).catch(err => {
    console.log('/api/pay/wx error: ', err)
    return { data: {} }
  })
  

  if (data.errcode !== 0) {
    return NextResponse.json({
      code: 0,
      data: {}
    })
  }

  return NextResponse.json({
    code: 200,
    data: {
      orderId: data.openid,
      qrcode: data.url_qrcode
    }
  })
  
}
