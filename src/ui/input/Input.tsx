import React from "react";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

const Input: React.FC<Props> = React.memo(
  ({ value, onChange, placeholder = "", disabled = false, className = "" }) => {
    return (
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={`
          ${className}
          border-onSecondary-english-violet
          hover:bg-onSecondary-english-violet
          hover:text-onSecondary-platinum
          disabled:text-onSecondary-platinum
          disabled:border-onSecondary-platinum
          rounded-lg
          border
          bg-secondary-dark-purple
          px-4
          py-3.5
          text-base
          text-secondary-cadet-grey
          transition
          placeholder:text-secondary-cadet-grey
          focus:border-primary-neon-blue
          focus:text-onPrimary-anti-flash-withe
          focus:outline-none
          disabled:bg-secondary-cadet-grey
          invalid:border-error-imperial-red
        `}
      />
    );
  },
);

export default Input;
