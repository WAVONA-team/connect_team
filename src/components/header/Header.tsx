import React from "react";

import { getServerAuthSession } from "@/server/auth";

import Container from "@/ui/container/Container";
import Logo from "@/ui/logo/Logo";
import Menu from "@/ui/menu/Menu";
import SignOutButton from "@/ui/signOutButton/signOut";
import SignInButton from "@/ui/signInButton/signIn";
import PopOver from "@/ui/popOver/PopOver";

const Header: React.FC = React.memo(async () => {
  const session = await getServerAuthSession();
  const menuItems = [
    {
      name: "Настройки",
      where: "/settings",
    },
    {
      name: "Профиль",
      where: `/user/${session?.user.id}`,
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
                <PopOver />

                <Menu
                  withArrow
                  items={menuItems}
                  imgUrl={`${session.user.image}`}
                >
                  <SignOutButton />
                </Menu>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
});

export default Header;
