import StreamPreviewHeader from "@/components/StreamPreviewHeader";
import Features from "@/components/Features";
import Faq from "@/components/Faq";


export default function Home() {
  return (
    <main className="overflow-hidden pb-8 md:pb-16">
      <StreamPreviewHeader />
      <Features />
      <Faq />
    </main>
  );
}
