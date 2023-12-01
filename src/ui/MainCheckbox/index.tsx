import React from "react";

interface Props {
  value: boolean;
  onChange: (value: boolean, name?: string) => void;
  name?: string;
}

export default function MainCheckbox({ value = false, name, onChange }: Props) {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={(e) => {
        onChange(e.target.checked, name);
      }}
      className="h-6 w-6 cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
    />
  );
}
