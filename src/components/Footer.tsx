import { useTranslations, useLocale } from "next-intl";
import { Link } from "@nextui-org/link";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const disclaimer =
    locale === "en"
      ? "https://github.com/chenfan0/fideo-live-record?tab=readme-ov-file#disclaimer"
      : "https://github.com/chenfan0/fideo-live-record/blob/main/README-CN.md#%E5%85%8D%E8%B4%A3%E7%94%B3%E6%98%8E";
  const privacy =
    locale === "en"
      ? "https://github.com/chenfan0/fideo-live-record?tab=readme-ov-file#fideo-privacy-policy"
      : "https://github.com/chenfan0/fideo-live-record/blob/main/README-CN.md#fideo%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96";
  return (
    <footer className="max-w-[1140px] m-auto p-4 md:p-8">
      <div className="max-w-[1140px] mx-auto px-4 py-6">
        {/* 简化的链接 */}
        <div className="flex justify-center space-x-4 mb-4">
          <Link href={privacy} color="foreground" target="_blank">
            {t("footer.privacy")}
          </Link>
          <Link href={disclaimer} color="foreground" target="_blank">
            {t("footer.disclaimer")}
          </Link>
        </div>

        {/* 版权信息 */}
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Fideo.{" "}
            {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
