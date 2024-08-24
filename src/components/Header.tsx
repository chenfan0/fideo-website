"use client";
import { useEffect, useRef } from "react";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

import bigo from "@/images/platform/bigo.svg";
import bilibili from "@/images/platform/bilibili.svg";
import douyu from "@/images/platform/douyu.svg";
import kuaishou from "@/images/platform/kuaishou.svg";
import huya from "@/images/platform/huya.svg";
import tiktok from "@/images/platform/tiktok.svg";
import twitch from "@/images/platform/twitch.svg";
import weibo from "@/images/platform/weibo.svg";
import youtube from "@/images/platform/youtube.svg";

import { useTranslations } from "next-intl";

const platforms = [
  { name: "Youtube", icon: youtube, link: "https://youtube.com" },
  { name: "Twitch", icon: twitch, link: "https://twitch.tv" },
  { name: "Tiktok", icon: tiktok, link: "https://www.tiktok.com/live/" },
  { name: "Bigo", icon: bigo, link: "https://www.bigo.tv" },
  { name: "Douyin", icon: tiktok, link: "https://live.douyin.com/" },
  { name: "Huya", icon: huya, link: "https://www.huya.com" },
  { name: "Bilibili", icon: bilibili, link: "https://live.bilibili.com/" },
  { name: "Douyu", icon: douyu, link: "https://www.douyu.com/" },
  { name: "Kuaishou", icon: kuaishou, link: "https://live.kuaishou.com/" },
  {
    name: "Weibo",
    icon: weibo,
    link: "https://weibo.com/l/wblive/p/show/1022:2321325052506609680949",
  },
];

export default function Header() {
  const t = useTranslations();
  const platformsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const platformsElement = platformsRef.current!;
    const platformsWidth = platformsElement.offsetWidth / 2; 

    gsap.to(platformsElement, {
      x: `-=${platformsWidth}`,
      duration: 20,
      ease: 'none',
      repeat: -1
    });
  }, [t]);

  return (
    <header className="relative z-10 py-12 px-4 mt-8 md:mt-14 md:py-20">
      <section>
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-emerald-500"></div>
        <h1 className="inline-flex flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[8rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300">
          Fideo
        </h1>
        <p className="fideo-desc mx-auto w-full max-w-screen-sm text-sm leading-snug text-neutral-400 lg:pr-8 2xl:text-lg mt-4 ">
          { t("header.description") }
        </p>
      </section>

      <section className="overflow-hidden mt-8 md:mt-16 mx-auto max-w-[800px] make-mask px-4 md:px-10">
        <div ref={platformsRef} className="platforms flex gap-8 opacity-50 md:gap-16 w-[fit-content]">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              className=" cursor-pointer"
              href={platform.link}
              target="_blank"
            >
              <Image
                src={platform.icon}
                width={48}
                height={48}
                alt={platform.name}
                className="min-w-[24px] md:min-w-[48px]"
              />
            </Link>
          ))}
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              className=" cursor-pointer"
              href={platform.link}
              target="_blank"
            >
              <Image
                src={platform.icon}
                width={48}
                height={48}
                alt={platform.name}
                className="min-w-[24px] md:min-w-[48px]"
              />
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
}
