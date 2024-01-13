import React from "react";
import { getServerAuthSession } from "@/server/auth";

import Logo from "@/components/logo/Logo";
import SignInButton from "@/components/signInButton/signIn";

import Container from "@/ui/container/Container";
import Link from "next/link";

const HomeHeader: React.FC = React.memo(async () => {
  const session = await getServerAuthSession();

  return (
    <header className="py-2">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          {session ? (
            <Link
              href="/pages/projects"
              className="px-4 py-3.5 text-base text-onPrimary-anti-flash-withe"
            >
              Вход
            </Link>
          ) : (
            <SignInButton />
          )}
        </div>
      </Container>
    </header>
  );
});

export default HomeHeader;
