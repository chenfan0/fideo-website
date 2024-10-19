import Image from "next/image";
import { useTranslations } from "next-intl";

import WXPay from "@/images/wx-pay.png";
import ZFBPay from "@/images/zfb-pay.png";

export default function Sponsor() {
  const t = useTranslations("sponsor");
  return (
    <section
      id="sponsor"
      className="mt-24 md:mt-32 p-4 md:p-16 text-center max-w-[1140px] m-auto"
    >
      <h2 className="font-display text-3xl font-semibold md:text-5xl text-nowrap">
        {t("title")}
      </h2>
      <div className="flex items-center justify-center gap-16 mt-8 flex-col md:flex-row">
        <Image className="w-[300px] h-[400px]" src={WXPay} alt="WXPay" />
        <Image className="w-[300px] h-[400px]" src={ZFBPay} alt="ZFBPay" />
      </div>
    </section>
  );
}
