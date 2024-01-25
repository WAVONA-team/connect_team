"use client";
import React from "react";

import MainButtonLink from "@/ui/mainButton/MainButtonLink";

const NotFound: React.FC = React.memo(() => {
  return (
    <section
      className={`flex flex-col h-full items-center justify-center bg-[url("/images/404Bg.png")] bg-center`}
    >
      <h1 className="text-9xl font-medium text-onPrimary-anti-flash-withe">
        500
      </h1>

      <p className="mt-1 block text-2xl text-onPrimary-anti-flash-withe">
        Извините, ошибка сервера
      </p>

      <MainButtonLink
        text="Вернутся на главную"
        path="/"
        target="_self"
        className="mt-12"
      />
    </section>
  );
});

export default NotFound;
