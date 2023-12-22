"use client";
import React from "react";

type Props = {
  labelText: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
};

const Checkbox: React.FC<Props> = React.memo(
  ({ labelText, isChecked, onChange, disabled = false, className = "" }) => {
    return (
      <label className="flex items-center gap-2">
        <input
          checked={isChecked}
          onChange={onChange}
          type="checkbox"
          disabled={disabled}
          className={`
            ${className}
            h-4
            w-4
            appearance-none
            rounded
            bg-white
            bg-[url("/images/checkbox/off.svg")]
            bg-contain
            bg-center
            bg-no-repeat
            outline-none
            checked:bg-[url("/images/checkbox/on.svg")]
            focus:bg-[url("/images/checkbox/off-focused.svg")]
            focus:checked:bg-[url("/images/checkbox/on-focused.svg")]
            disabled:bg-[url("/images/checkbox/off-disabled.svg")]
            disabled:checked:bg-[url("/images/checkbox/on-disabled.svg")]
          `}
        />

        <span className="text-white">{labelText}</span>
      </label>
    );
  },
);

export default Checkbox;
