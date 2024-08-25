import Header from "@/components/Header";
import Features from "@/components/Features";
import Faq from "@/components/Faq";


export default function Home() {
  return (
    <main className="overflow-hidden py-8 md:py-16">
      <Header />
      <Features />
      <Faq />
    </main>
  );
}
