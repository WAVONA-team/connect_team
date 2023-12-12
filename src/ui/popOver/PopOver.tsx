"use client";
import React, { Fragment } from "react";
import { Popover as HeadlessPopOver, Transition } from "@headlessui/react";

const PopOver: React.FC = React.memo(() => {
  return (
    <div className="max-w-sm">
      <HeadlessPopOver className="relative">
        <HeadlessPopOver.Button
          className={`
            h-8
            w-6
            bg-[url("/images/ring.svg")]
            bg-contain
            bg-center
            bg-no-repeat
          `}
        />

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
            notifications
          </HeadlessPopOver.Panel>
        </Transition>
      </HeadlessPopOver>
    </div>
  );
});

export default PopOver;
