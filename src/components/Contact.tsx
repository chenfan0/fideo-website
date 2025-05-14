import { useTranslations } from "next-intl";
import Image from "next/image";

import qq from "@/images/qq.svg";
import discord from "@/images/discord.svg";
import telegram from "@/images/telegram.svg";
import { Link } from "@nextui-org/link";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <section
      id="contact"
      className="mt-24 md:mt-32 p-4 md:p-16 text-center max-w-[1140px] m-auto"
    >
      <h2 className="font-display text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h2>
      <div className="flex justify-center items-center gap-16 mt-16">
        <Link className="cursor-pointer" href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=6J5_9669aU4Dxjb_mWGpAhNvQ7JGrh0h&authKey=HiUtMqFPDEbO9xZFS6V2kNo3rBv3L%2B764z5o9zepXFI%2Bf1h4HkA8%2F2eTZ4F4TdQH&noverify=0&group_code=891116727" target="_blank">
          <Image src={qq} alt="qq" width={100} height={100} />
        </Link>

        {/* <Link className="cursor-pointer" href="https://discord.gg/mhCr4HRt" target="_blank">
          <Image src={discord} alt="discord" width={100} height={100} />
        </Link> */}

        <Link className="cursor-pointer" href="https://t.me/+P9aw81NO6-k3OTI9" target="_blank">
          <Image src={telegram} alt="telegram" width={100} height={100} />
        </Link>
      </div>
    </section>
  );
}
