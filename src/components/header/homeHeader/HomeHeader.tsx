import React from "react";
import { getServerAuthSession } from "@/server/auth";
import { useTranslation } from "@/shared/localization/i18n";

import Logo from "@/components/logo/Logo";
import SignInButton from "@/components/signInButton/signIn";

import Container from "@/ui/container/Container";
import Link from "next/link";

const HomeHeader: React.FC = React.memo(async () => {
  const session = await getServerAuthSession();
  const { t } = await useTranslation('en');

  return (
    <header className="py-2">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          {session ? (
            <Link
              href="/projects"
              className="px-4 py-3.5 text-base text-onPrimary-anti-flash-withe"
            >
              {t("signIn")}
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
