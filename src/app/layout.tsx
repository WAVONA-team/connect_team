import React, { type ReactNode } from 'react';
import { TRPCReactProvider } from '@/trpc/react';

import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Test next auth",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: ReactNode,
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default RootLayout;
