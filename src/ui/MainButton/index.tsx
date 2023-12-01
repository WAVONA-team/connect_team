import React, { ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  type: "red" | "main";
  onClick: () => void;
}

const mainClass =
  "mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
const redClass =
  "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";

const MainButton: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn({
        [mainClass]: type === "main",
        [redClass]: type === "red",
      })}
    >
      {children}
    </button>
  );
};

export default MainButton;
