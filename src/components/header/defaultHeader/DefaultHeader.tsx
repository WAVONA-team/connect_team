import React from "react";
import { getServerAuthSession } from "@/server/auth";

import NotificationPopOver from "@/modules/notificationPopOver/NotificationPopOver";
import HeaderMenu from "@/modules/headerMenu/HeaderMenu";

import Logo from "@/components/logo/Logo";
import SignInButton from "@/components/signInButton/signIn";

import Container from "@/ui/container/Container";

const DefaultHeader: React.FC = React.memo(async () => {
  const session = await getServerAuthSession();

  return (
    <header
      className="
        lg:py-5
        bg-surface-raisin-black
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
              <div className="flex items-center gap-4">
                <NotificationPopOver />

                <HeaderMenu
                  userId={session.user.id}
                  imgUrl={session.user.image}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
});

export default DefaultHeader;
