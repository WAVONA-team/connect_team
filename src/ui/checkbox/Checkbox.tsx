"use client";
import React from "react";

type Props = {
  labelText: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
  className?: string;
};

const Checkbox: React.FC<Props> = React.memo(
  ({
    labelText,
    isChecked,
    setIsChecked,
    disabled = false,
    className = "",
  }) => {
    return (
      <label className="flex items-center gap-2">
        <input
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          type="checkbox"
          disabled={disabled}
          className={`
            ${className}
            h-4
            w-4
            appearance-none
            rounded
            bg-white
            bg-contain
            bg-center
            bg-no-repeat
            checked:bg-primary-button-fill
            checked:bg-[url("/images/check.svg")]
            disabled:bg-secondary-cadet-grey
            disabled:text-secondary-cadet-grey
          `}
        />

        <span className="text-white">{labelText}</span>
      </label>
    );
  },
);

export default Checkbox;
