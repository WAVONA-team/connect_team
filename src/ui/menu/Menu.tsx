"use client";
import React, { Fragment } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

import { type MenuItems } from "./types/MenuItem";

type Props = {
  withArrow?: boolean;
  items: MenuItems[];
  children?: React.ReactNode;
  imgUrl: string;
};

const Menu: React.FC<Props> = React.memo(
  ({ withArrow = false, items, children = null, imgUrl }) => {
    console.log(imgUrl);

    return (
      <HeadlessMenu as="div" className="relative">
        <div
          className="
          flex
          items-center
          justify-between
          gap-2
        "
        >
          <HeadlessMenu.Button>
            <Image
              src={imgUrl}
              alt={imgUrl}
              width={32}
              height={32}
              className="rounded"
            />
          </HeadlessMenu.Button>

          {withArrow && (
            <div
              className={`
              block
              h-5
              w-5
              bg-[url("/images/arrowDown.svg")]
              bg-contain
              bg-center
              bg-no-repeat
            `}
            />
          )}
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <HeadlessMenu.Items
            className="
              absolute
              right-0
              mt-2
              origin-top-right
              rounded
              bg-white
              shadow-lg
            "
          >
            <div className="px-3 py-3">
              {items.map((item) => {
                const { name, where } = item;

                return (
                  <HeadlessMenu.Item
                    key={name}
                    as={"div"}
                    className="block"
                  >
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
                      href={where}
                    >
                      {name}
                    </Link>
                  </HeadlessMenu.Item>
                );
              })}

              {children && <HeadlessMenu.Item>{children}</HeadlessMenu.Item>}
            </div>
          </HeadlessMenu.Items>
        </Transition>
      </HeadlessMenu>
    );
  },
);

export default Menu;
