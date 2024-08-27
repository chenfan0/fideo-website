import StreamPreviewHeader from "@/components/StreamPreviewHeader";
import Features from "@/components/Features";
import Faq from "@/components/Faq";


export default function Home() {
  return (
    <main className="overflow-hidden py-8 md:py-16">
      <StreamPreviewHeader />
      <Features />
      <Faq />
    </main>
  );
}
