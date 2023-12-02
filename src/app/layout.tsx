import React from 'react';
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";

import { Inter } from "next/font/google";
import "@/styles/globals.css";

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
    <html lang="en">
      <body className={`font-sans ${inter.variable} h-screen flex flex-col`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
});

export default RootLayout;
