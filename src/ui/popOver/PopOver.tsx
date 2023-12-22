"use client";
import React, { Fragment } from "react";
import { Popover as HeadlessPopOver, Transition } from "@headlessui/react";

type Props = {
  children: React.ReactNode;
  button: React.ReactNode;
  height: string;
  width: string;
  buttonClassName?: string;
  panelClassName?: string;
  className?: string;
};

const PopOver: React.FC<Props> = React.memo(
  ({
    children,
    button,
    height,
    width,
    buttonClassName = "",
    panelClassName = "",
    className = "",
  }) => {
    return (
      <HeadlessPopOver className={`relative h-${height} ${className}`}>
        <HeadlessPopOver.Button
          className={`
            ${buttonClassName}
            h-${height}
            w-${width}
            focus:outline-none
          `}
        >
          {button}
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
          <HeadlessPopOver.Panel
            className={`${panelClassName} absolute left-1/2 top-10 -translate-x-1/2 border border-purple-700`}
          >
            {children}
          </HeadlessPopOver.Panel>
        </Transition>
      </HeadlessPopOver>
    );
  },
);

export default PopOver;
