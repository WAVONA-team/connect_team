"use client";
import React from "react";
import { Menu as HeadlessMenu } from "@headlessui/react";

import SignOutButton from "@/components/signOutButton/signOut";

import Menu from "@/ui/menu/Menu";
import Link from "next/link";
import Image from "next/image";

import { type MenuItem } from "./types/MenuItem";

type Props = {
  userId: string;
  imgUrl: string | null | undefined;
};

const HeaderMenu: React.FC<Props> = React.memo(({ userId, imgUrl }) => {
  const menuItems: MenuItem[] = [
    {
      name: "Настройки",
      path: `/user/${userId}/settings`,
    },
    {
      name: "Профиль",
      path: `/user/${userId}`,
    },
  ];

  return (
    <Menu
      withArrow
      menuButton={
        <Image
          src={imgUrl ?? ""}
          alt={imgUrl ?? "avatar"}
          width={32}
          height={32}
          className="rounded"
        />
      }
    >
      {menuItems.map((item) => {
        const { name, path } = item;

        return (
          <HeadlessMenu.Item key={name} as={"div"} className="block">
            <Link
              className="
                block
                rounded
                px-2
                py-2
                text-center
                text-sm
                text-black
                hover:bg-purple-800
                hover:text-white
              "
              href={path}
            >
              {name}
            </Link>
          </HeadlessMenu.Item>
        );
      })}

      <HeadlessMenu.Item>
        <SignOutButton />
      </HeadlessMenu.Item>
    </Menu>
  );
});

export default HeaderMenu;
