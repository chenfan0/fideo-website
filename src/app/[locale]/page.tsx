
import { Button } from "@nextui-org/button";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t =  useTranslations()
  return (
    <div>
      <h1></h1>
      <Button>{t('title')}</Button>
    </div>
  );
}
