"use client";
import React from "react";
import classNames from "classnames";
import { Menu as HeadlessMenu } from "@headlessui/react";

import { type MenuItem } from "./types/MenuItem";

import SignOutButton from "@/components/signOutButton/signOut";

import Menu from "@/ui/menu/Menu";
import DropDownItem from "@/ui/DropDownItem/DropDownItem";
import Image from "next/image";

type Props = {
  userId: string;
  imgUrl: string | null | undefined;
};

const HeaderMenu: React.FC<Props> = React.memo(({ userId, imgUrl }) => {
  const menuItems: MenuItem[] = [
    {
      name: "Настройки",
      path: `/pages/user/${userId}/settings`,
    },
    {
      name: "Профиль",
      path: `/pages/user/${userId}`,
    },
  ];

  return (
    <Menu
      menuButton={
        <Image
          src={imgUrl ?? ""}
          alt={imgUrl ?? "avatar"}
          width={32}
          height={32}
          className="rounded-full"
        />
      }
    >
      {menuItems.map((item, index) => {
        const { name, path } = item;

        return (
          <HeadlessMenu.Item
            key={name}
            as={"div"}
            className="first:border-t-lg block"
          >
            <DropDownItem
              link={path}
              className={classNames({
                "rounded-t-lg": index === 0,
              })}
            >
              {name}
            </DropDownItem>
          </HeadlessMenu.Item>
        );
      })}

      <HeadlessMenu.Item>
        <DropDownItem className="rounded-b-lg">
          <SignOutButton />
        </DropDownItem>
      </HeadlessMenu.Item>
    </Menu>
  );
});

export default HeaderMenu;
