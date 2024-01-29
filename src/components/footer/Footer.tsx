import React from "react";
import { getServerAuthSession } from "@/server/auth";

import Logo from "@/components/logo/Logo";
import Container from "@/ui/container/Container";
import Link from "next/link";

const Footer: React.FC = React.memo(async () => {
  const session = await getServerAuthSession();

  const links = [
    {
      name: "Проекты",
      path: "/projects",
    },
    {
      name: "Профиль",
      path: `/user/${session?.user.id}`,
    },
    {
      name: "Отклики",
      path: `/responses/${session?.user.id}`,
    },
    {
      name: "Создать проект",
      path: `/projects/create`,
    },
  ];

  return (
    <footer className="py-8 bg-surface-raisin-black">
      <Container>
        <div className="grid grid-cols-3 justify-items-center">
          <div className="flex flex-col gap-4">
            <Logo />

            <p className="text-sm text-onPrimary-anti-flash-withe">
              Поиск IT команд и разработчиков для ваших проектов
            </p>
          </div>

          <div className="flex w-min flex-col gap-3">
            {links.map((link) => {
              const { name, path } = link;

              return (
                <Link
                  className="w-max p-2 text-sm text-onPrimary-anti-flash-withe transition hover:text-accent-azure"
                  href={path}
                >
                  {name}
                </Link>
              );
            })}
          </div>

          <div className="flex w-min flex-col gap-3">
            <Link
              className="w-max p-2 text-sm text-onPrimary-anti-flash-withe transition hover:text-accent-azure"
              href="/aboutUs"
            >
              Наша команда
            </Link>

            <div className="gap flex flex-col items-start">
              <p className="w-max pl-2 text-sm text-onPrimary-anti-flash-withe">
                По всем вопросам
              </p>

              <Link
                className="p-2 text-accent-azure"
                href="mailto:wavona.team@gmail.com"
              >
                wavona.team@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-onPrimary-anti-flash-withe">
          <p className="mt-4 block text-xs text-onPrimary-anti-flash-withe">
            &copy; WavonaTeam, {new Date().toString().slice(11, 15)}
          </p>
        </div>
      </Container>
    </footer>
  );
});

export default Footer;
