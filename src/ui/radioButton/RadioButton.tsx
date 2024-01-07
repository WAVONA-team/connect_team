import React from "react";
import classNames from "classnames";

type Props = {
  labelText: string;
  labelClassName?: string;
  radioName: string;
  radioValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

const RadioButton: React.FC<Props> = React.memo(
  ({
    labelText,
    labelClassName = "",
    radioName,
    radioValue,
    onChange,
    disabled = false,
  }) => {
    return (
      <label className={labelClassName}>
        <input
          type="radio"
          name={radioName}
          value={radioValue}
          onChange={onChange}
          disabled={disabled}
          className={`
            h-4
            w-4
            appearance-none
            bg-[url("/images/radio/off.svg")]
            bg-contain
            bg-center
            bg-no-repeat
            outline-none
            checked:bg-[url("/images/radio/on.svg")]
            focus:bg-[url("/images/radio/off-focused.svg")]
            focus:checked:bg-[url("/images/radio/on-focused.svg")]
            disabled:bg-[url("/images/radio/off-disabled.svg")]
            disabled:checked:bg-[url("/images/radio/on-disabled.svg")]
          `}
        />

        <p
          className={classNames("text-base text-onPrimary-anti-flash-withe", {
            "text-secondary-cadet-grey": disabled,
          })}
        >
          {labelText}
        </p>
      </label>
    );
  },
);

export default RadioButton;
