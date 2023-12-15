import React from "react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/components/providers/Providers";

const inter = Inter({
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
        className={`font-sans ${inter.className} flex h-screen flex-col bg-gray font-roboto`}
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
