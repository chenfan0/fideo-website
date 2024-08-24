import Header from "@/components/Header";
import Features from "@/components/Features";

interface HomeProps {
  locale: "cn" | "en";
}

export default function Home(params: HomeProps) {
  const { locale } = params;
  console.log(locale, '=======')
  return (
    <main className="  overflow-hidden ">
      <Header />
      <Features locale={locale} />
    </main>
  );
}
