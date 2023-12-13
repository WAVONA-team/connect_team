import React from "react";

import { getServerAuthSession } from "@/server/auth";

import Container from "@/ui/container/Container";
import Logo from "@/components/logo/Logo";
import Menu from "@/ui/menu/Menu";
import NotificationPopOver from "../notificationPopOver/notificationPopOver";
import SignInButton from "@/components/signInButton/signIn";

const Header: React.FC = React.memo(async () => {
  const session = await getServerAuthSession();
  const menuItems = [
    {
      name: "Настройки",
      path: "/settings",
    },
    {
      name: "Профиль",
      path: `/user/${session?.user.id}`,
    },
  ];

  return (
    <header
      className="
        desktop:py-5
        bg-purple-800
        py-2
      "
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <div>
            {!session ? (
              <SignInButton />
            ) : (
              <div className="flex gap-4 items-center">
                <NotificationPopOver />

                <Menu
                  withArrow
                  items={menuItems}
                  imgUrl={`${session.user.image}`}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
});

export default Header;
