import React from "react";

import Header from "@/components/header/Header";
import Providers from "@/components/providers/Providers";
import Footer from "@/components/footer/Footer";

import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Connect Team",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = React.memo(({ children }) => {
  return (
    <html lang="ru">
      <body
        className={`${notoSans.className} flex h-screen flex-col bg-background-night`}
      >
        <Providers>
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
});

export default RootLayout;
