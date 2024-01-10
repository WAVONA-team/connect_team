"use client";
import React, { Fragment } from "react";
import { Popover as HeadlessPopOver, Transition } from "@headlessui/react";
import Bell from "../icons/bell/Bell";

type Props = {
  children: React.ReactNode;
};

const PopOver: React.FC<Props> = React.memo(({ children }) => {
  return (
    <div className="max-w-sm">
      <HeadlessPopOver className="relative">
        <HeadlessPopOver.Button
          className={`
            h-8
            w-6
            focus:outline-none
          `}
        >
          <Bell />
        </HeadlessPopOver.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <HeadlessPopOver.Panel className="absolute left-1/2 top-10 -translate-x-1/2 border border-purple-700">
            {children}
          </HeadlessPopOver.Panel>
        </Transition>
      </HeadlessPopOver>
    </div>
  );
});

export default PopOver;
