"use client";
import React from "react";
import { useTranslation } from "@/shared/localization/i18n";

import MainButtonLink from "@/ui/mainButton/MainButtonLink";

const NotFound: React.FC = React.memo(async() => {
  const { t, i18n } = await useTranslation('en');

  return (
    <section
      className={`flex flex-col h-full items-center justify-center bg-[url("/images/404Bg.png")] bg-center`}
    >
      <h1 className="text-9xl font-medium text-onPrimary-anti-flash-withe">
        500
      </h1>

      <p className="mt-1 block text-2xl text-onPrimary-anti-flash-withe">
        {t("notFound.server_error")}
      </p>

      <MainButtonLink
        text={t("notFound.return_home")}
        path="/"
        target="_self"
        className="mt-12"
      />
    </section>
  );
});

export default NotFound;
