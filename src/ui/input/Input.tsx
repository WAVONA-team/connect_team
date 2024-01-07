import React from "react";
import classNames from "classnames";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
};

const Input: React.FC<Props> = React.memo(
  ({
    value,
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    error = "",
  }) => {
    return (
      <div className="relative">
        {!!error && (
          <p className="absolute font-semibold text-error-imperial-red">
            {error}
          </p>
        )}

        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className={classNames(
            `${className}
            hover:text-onSecondary-platinum
            disabled:text-onSecondary-platinum
            disabled:border-onSecondary-platinum
            mt-8
            w-full
            rounded-lg
            border
            border-onSecondary-english-violet
            bg-secondary-dark-purple
            px-4
            py-3.5
            text-base
            text-secondary-cadet-grey
            transition
            placeholder:text-secondary-cadet-grey
            hover:bg-onSecondary-english-violet
            focus:border-primary-neon-blue
            focus:text-onPrimary-anti-flash-withe
            focus:outline-none
            disabled:bg-secondary-cadet-grey`,
            {
              "border-error-imperial-red": !!error,
            },
          )}
        />
      </div>
    );
  },
);

export default Input;
