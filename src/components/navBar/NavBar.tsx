"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTranslation } from "@/shared/localization/i18n";

import Tabs from "@/ui/tabs/tabs";

const NavBar: React.FC = React.memo(async () => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const { t } = await useTranslation('en');

  return (
    <nav className="relative">
      <div className="flex">
        <Tabs
          link="/projects"
          title={t("projects")}
          isActive={pathName === "/projects"}
        />

        <Tabs
          link={`/responses/${session?.user.id}`}
          title={t("responses")}
          isActive={pathName === `/responses/${session?.user.id}`}
        />
      </div>

      <div className="absolute bottom-0 -z-20 w-full border border-onPrimary-anti-flash-withe" />
    </nav>
  );
});

export default NavBar;
