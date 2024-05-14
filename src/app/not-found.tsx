import React from "react";

import DefaultHeader from "@/components/header/defaultHeader/DefaultHeader";
import Footer from "@/components/footer/Footer";

import MainButtonLink from "@/ui/mainButton/MainButtonLink";

const NotFound: React.FC = React.memo(() => {
  return (
    <div
      className={`flex h-screen flex-col bg-background-night bg-[url("/images/404Bg.png")] bg-center`}
    >
      <DefaultHeader />

      <section className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-9xl font-medium text-onPrimary-anti-flash-withe">
          404
        </h1>

        <p className="mt-1 block text-2xl text-onPrimary-anti-flash-withe">
          Извините, страница не найдена
        </p>

        <MainButtonLink
          text="Вернутся на главную"
          path="/"
          target="_self"
          className="mt-12"
        />
      </section>

      <Footer />
    </div>
  );
});

export default NotFound;
