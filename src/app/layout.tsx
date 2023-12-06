import React from 'react';

import Providers from '@/components/providers/Providers';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Connect Team",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: React.ReactNode,
};

const RootLayout: React.FC<Props> = React.memo(({ children }) => {
  return (
    <html lang="ru">
      <body className={`font-sans ${inter.className} h-screen flex flex-col`}>
        <Providers>
          <Header />

          <main className="flex-1">
            <div className="w-1/2 m-auto">
              {children}
            </div>
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
});

export default RootLayout;
