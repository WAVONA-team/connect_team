import React from "react";

import DefaultHeader from "@/components/header/defaultHeader/DefaultHeader";
import Footer from "@/components/footer/Footer";

import "@/styles/globals.css";

export const metadata = {
  title: "Connect Team",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: React.ReactNode;
};

const AllLayout: React.FC<Props> = React.memo(({ children }) => {
  return (
    <body className="flex h-screen flex-col bg-background-night">
      <DefaultHeader />

      <main className="flex-1">{children}</main>

      <Footer />
    </body>
  );
});

export default AllLayout;
