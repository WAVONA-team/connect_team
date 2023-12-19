import React from "react";

import Header from "@/components/header/Header";
import Providers from "@/components/providers/Providers";
import Footer from "@/components/footer/Footer";

import { Noto_Sans_Kannada } from "next/font/google";
import "@/styles/globals.css";

const kannada = Noto_Sans_Kannada({
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={`${kannada.className} flex h-screen flex-col bg-black`}
      >
        <Providers>
          <Header />

          <main className="flex-1">
            <div className="m-auto w-3/5">{children}</div>
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
});

export default RootLayout;
