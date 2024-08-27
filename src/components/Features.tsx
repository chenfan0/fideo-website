import { useTranslations, useLocale } from "next-intl";

import Image from "next/image";

import RecordingCN from "@/images/features/cn/recording.webp";
import RecordingEN from "@/images/features/en/recording.webp";
import ResolutionChangeCN from "@/images/features/cn/resolution-change.webp";
import ResolutionChangeEN from "@/images/features/en/resolution-change.webp";
import MonitoringCN from "@/images/features/cn/monitoring.webp";
import MonitoringEN from "@/images/features/en/monitoring.webp";

export default function Features() {
  const t = useTranslations("features");
  const locale = useLocale();

  const Recording = locale === "cn" ? RecordingCN : RecordingEN;
  const Monitoring = locale === "cn" ? MonitoringCN : MonitoringEN;
  const ResolutionChange = locale === "cn" ? ResolutionChangeCN : ResolutionChangeEN; 

  return (
    <section className="mt-16 md:mt-24  px-8 text-center max-w-[1140px] m-auto">
      <section className=" mt-16 md:mt-24 ">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">
          {t("easy_to_use.title")}
        </h2>
        <p className="mt-4 md:mt-8 text-xs md:text-lg text-[#aeb5bd;] mx-auto max-w-[520px]">
          {t("easy_to_use.desc")}
        </p>
        <Image
          className="max-w-[100%] md:max-w-[90%] mx-auto mt-8 border-1 border-[#323334] rounded-lg hover:scale-[1.01] hover:border-2 transition-all duration-300"
          src={Recording}
          alt="easy_to_use"
        />
      </section>

      <section className="mt-16 md:mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">
          {t("monitor_stream.title")}
        </h2>
        <p className="mt-4 md:mt-8 text-xs md:text-lg text-[#aeb5bd;] mx-auto max-w-[520px]">
          {t("monitor_stream.desc")}
        </p>
        <Image
          className="max-w-[100%] md:max-w-[90%] mx-auto mt-8 border-1 border-[#323334] rounded-lg hover:scale-[1.01] hover:border-2 transition-all duration-300"
          src={Monitoring}
          alt="monitor_stream"
        />
      </section>

      <section className="mt-16 md:mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">
          {t("resolution_change.title")}
        </h2>
        <p className="mt-4 md:mt-8 text-xs md:text-lg text-[#aeb5bd;] mx-auto max-w-[520px]">
          {t("resolution_change.desc")}
        </p>

        <Image
          className="max-w-[100%] md:max-w-[90%] mx-auto mt-8 border-1 border-[#323334] rounded-lg hover:scale-[1.01] hover:border-2 transition-all duration-300"
          src={ResolutionChange}
          alt="resolution_change"
        />
      </section>
    </section>
  );
}
