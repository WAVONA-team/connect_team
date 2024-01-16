"use client";
import React, { Fragment } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";

type Props = {
  withArrow?: boolean;
  children: React.ReactNode;
  menuButton: React.ReactNode;
};

const Menu: React.FC<Props> = React.memo(
  ({ withArrow = false, children, menuButton }) => {
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
          <HeadlessMenu.Button>{menuButton}</HeadlessMenu.Button>

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
              z-10
              right-0
              mt-2
              origin-top-right
              rounded-lg
              bg-secondary-dark-purple
              shadow-lg
            "
          >
            <div>{children}</div>
          </HeadlessMenu.Items>
        </Transition>
      </HeadlessMenu>
    );
  },
);

export default Menu;
