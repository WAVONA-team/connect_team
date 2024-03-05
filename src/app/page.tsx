import React from "react";

import HomeHeader from "@/components/header/homeHeader/HomeHeader";
import { useTranslation } from "@/shared/localization/i18n";
import Container from "@/ui/container/Container";
import SecondaryButtonLink from "@/ui/secondaryButton/SecondaryButtonLink";
import MainButtonLink from "@/ui/mainButton/MainButtonLink";

const Home: React.FC = React.memo (async() => {
  const { t } = await useTranslation('en');
  return (
    <body className={`flex h-screen flex-col bg-[url("/images/homeBg.jpg")]`}>
      <HomeHeader />

      <main className="flex-1">
        <Container>
          <section className="mt-36 flex flex-col gap-12">
            <div className="flex max-w-2xl flex-col gap-6">
              <h1 className="text-6xl text-onPrimary-anti-flash-withe">
                {t('home.title')}
              </h1>

              <p className="text-3xl text-onPrimary-anti-flash-withe">
                {t('home.subtitle')}
              </p>
            </div>

            <div className="flex items-center gap-8">
              <MainButtonLink
                text={t('home.find_team_button')}
                path="/projects"
                target="_self"
              />

              <SecondaryButtonLink
                text={t('home.create_project_button')}
                path="/projects/create"
                target="_self"
              />
            </div>
          </section>
        </Container>
      </main>
    </body>
  );
});

export default Home;
