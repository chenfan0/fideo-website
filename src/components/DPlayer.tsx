"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import close from "@/images/close.svg";

interface DPlayerProps {
  streamUrl: string;
  setIsPreviewing: (isPreviewing: boolean) => void;
}

function scriptLoader(url: string): Promise<boolean> {
  const script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
  return new Promise((resolve) => {
    script.onload = () => resolve(true);
  });
}

export default function DPlayerCpn({
  streamUrl,
  setIsPreviewing,
}: DPlayerProps) {
  const router = useRouter();

  const removeStreamUrlSearchParam = useCallback(() => {
    const params = new URLSearchParams(window.location.search);

    params.delete("streamUrl");
    router.push(window.location.pathname + "?" + params.toString());
  }, [router]);

  useEffect(() => {
    let dp: any;
    const promises: Promise<boolean>[] = [];
    if (!window.DPlayer) {
      const dplayerPromise = scriptLoader(
        "https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js"
      );
      const flvPromise = scriptLoader(
        "https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js"
      );
      const hlsPromise = scriptLoader(
        "https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"
      );
      promises.push(dplayerPromise, flvPromise, hlsPromise);
    }
    Promise.all(promises).then(() => {
      // @ts-ignore
      dp = new DPlayer({
        container: document.getElementById("dplayer") as HTMLElement,
        video: {
          url: streamUrl,
        },
      });
      dp.play();
      removeStreamUrlSearchParam();
    });

    return () => {
      dp?.destroy();
    };
  }, [streamUrl, removeStreamUrlSearchParam]);

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
