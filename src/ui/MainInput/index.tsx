import React from "react";

interface Props {
  value: string;
  placeholder: string;
  onChange: (value: string, name: string) => void;
  name: string;
}

const MainInput: React.FC<Props> = ({ value, placeholder, onChange, name }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value, name)}
      type="text"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  );
};

export default MainInput;
