"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";


import Image from "next/image";
import close from "@/images/close.svg";

interface DPlayerProps {
  streamUrl: string;
  setIsPreviewing: (isPreviewing: boolean) => void;
}

export default function DPlayerCpn({
  streamUrl,
  setIsPreviewing,
}: DPlayerProps) {
  const t = useTranslations();
  useEffect(() => {
    // @ts-ignore
    const dp = new DPlayer({
      container: document.getElementById("dplayer") as HTMLElement,
      video: {
        url: streamUrl,
      },
    });

    return () => {
      dp.destroy();
    };
  }, [streamUrl]);

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-[999] bg-[rgba(0,0,0,0.5)]">
      <div
        className="rounded-lg w-[80vw] h-[80vh] border-[rgba(255,255,255,0.8)] border-2 overflow-hidden"
        id="dplayer"
      ></div>
      <Image
        src={close}
        alt="close"
        className="absolute top-6 right-6 w-10 h-10 cursor-pointer"
        onClick={() => setIsPreviewing(false)}
      />
    </div>
  );
}
