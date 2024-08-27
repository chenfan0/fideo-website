import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fideo",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: {
    locale
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string
  }
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} className="dark">
      <Script src="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js" defer />
      <Script src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js" defer />
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <NavBar />
        {children}
        <Footer />
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
