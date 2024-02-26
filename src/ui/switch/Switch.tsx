"use client";
import React from "react";
import classNames from "classnames";
import { Switch as HeadlessSwitch } from "@headlessui/react";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const Switch: React.FC<Props> = React.memo(
  ({ checked, onChange, disabled = false }) => {
    return (
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        className={classNames(
          "relative inline-flex h-7 w-12 items-center rounded-full",
          {
            "bg-primary-majorelle-blue": checked,
            "bg-onSecondary-platinum": !checked,
            "bg-secondary-cadet-grey": disabled,
            "bg-primary-powder-blue": checked && disabled,
          },
        )}
        disabled={disabled}
      >
        <span
          className={classNames(
            "inline-block h-6 w-6 transform rounded-full bg-onPrimary-anti-flash-withe transition",
            {
              "translate-x-5": checked || (checked && disabled),
              "shadow-surface translate-x-1": !checked || disabled,
            },
          )}
        />
      </HeadlessSwitch>
    );
  },
);

export default Switch;
