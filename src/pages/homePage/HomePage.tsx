import React from "react";

import MainButtonLink from "@/ui/mainButton/MainButtonLink";
import SecondaryButtonLink from "@/ui/secondaryButton/SecondaryButtonLink";

const HomePage: React.FC = React.memo(() => {
  return (
    <section className="mt-36 flex flex-col gap-12">
      <div className="flex max-w-2xl flex-col gap-6">
        <h1 className="text-6xl text-onPrimary-anti-flash-withe">
          Эффективное решение
          <br />
          для поиска IT команд
        </h1>

        <p className="text-3xl text-onPrimary-anti-flash-withe">
          С connectTeam вы можете легко найти команду для разработки или создать
          свой собственный проект
        </p>
      </div>

      <div className="flex items-center gap-8">
        <MainButtonLink
          text="Найти команду"
          path="/projects"
          target="_self"
        />

        <SecondaryButtonLink
          text="Создать проект"
          path="/projects/create"
          target="_self"
        />
      </div>
    </section>
  );
});

export default HomePage;
