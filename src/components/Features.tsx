import { useTranslations } from "next-intl";

import Image from "next/image";

import RecordingCN from "@/images/features/cn/recording.webp";
import RecordingEN from "@/images/features/en/recording.webp";
import ResolutionChangeCN from "@/images/features/cn/resolution-change.webp";
import ResolutionChangeEN from "@/images/features/en/resolution-change.webp";
import MonitoringCN from "@/images/features/cn/monitoring.webp";
import MonitoringEN from "@/images/features/en/monitoring.webp";

interface FeaturesProps {
  locale: "cn" | "en";
}

export default function Features(params: FeaturesProps) {
  const { locale } = params;
  console.log(locale);
  const t = useTranslations("features");

  return (
    <section className="mt-16 md:mt-24  px-8 text-center max-w-[1140px] m-auto">
      <section className=" mt-16 md:mt-24 ">
        <h2 className="font-display text-3xl font-semibold md:text-5xl text-nowrap">
          {t("easy_to_use.title")}
        </h2>
        <p className="mt-8 text-lg text-[#aeb5bd;] mx-auto max-w-[520px]">{t("easy_to_use.desc")}</p>
        <Image
          className="max-w-[100%] mt-8"
          src={locale === "cn" ? RecordingCN : RecordingEN}
          alt="easy_to_use"
        />
      </section>

      <section className="mt-16 md:mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl text-nowrap">
          {t("monitor_stream.title")}
        </h2>
        <p className="mt-8 text-lg text-[#aeb5bd;] mx-auto max-w-[520px]">
          {t("monitor_stream.desc")}
        </p>
        <Image
          className="max-w-[100%] mt-8"
          src={locale === "cn" ? MonitoringCN : MonitoringEN}
          alt="monitor_stream"
        />
      </section>

      <section className="mt-16 md:mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl text-nowrap">
          {t("resolution_change.title")}
        </h2>
        <p className="mt-8 text-lg text-[#aeb5bd;] mx-auto max-w-[520px]">
          {t("resolution_change.desc")}
        </p>

        <Image
          className="max-w-[100%] mt-8"
          src={locale === "cn" ? ResolutionChangeCN : ResolutionChangeEN}
          alt="resolution_change"
        />
      </section>
    </section>
  );
}
