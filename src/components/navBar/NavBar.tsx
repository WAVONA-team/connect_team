"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import Tabs from "@/ui/tabs/tabs";

const NavBar: React.FC = React.memo(() => {
  const pathName = usePathname();
  const session = useSession();

  return (
    <nav className="relative">
      <div className="flex">
        <Tabs
          link="/projects"
          title="Проекты"
          isActive={pathName === "/projects"}
        />

        <Tabs
          link={`/responses/${session.data?.user.id}`}
          title="Отклики"
          isActive={pathName === `/responses/${session.data?.user.id}`}
        />
      </div>

      <div className="absolute bottom-0 -z-20 w-full border border-onPrimary-anti-flash-withe" />
    </nav>
  );
});

export default NavBar;
