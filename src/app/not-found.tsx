import React from "react";
import { useTranslation } from "@/shared/localization/i18n";

import DefaultHeader from "@/components/header/defaultHeader/DefaultHeader";
import Footer from "@/components/footer/Footer";

import MainButtonLink from "@/ui/mainButton/MainButtonLink";

const NotFound: React.FC = React.memo(async () => {
  const { t } = await useTranslation('en');

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
          {t("notFound.page_not_found")}
        </p>

        <MainButtonLink
          text={t("notFound.return_home")}
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
