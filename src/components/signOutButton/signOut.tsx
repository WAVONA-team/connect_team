"use client";
import React from "react";
import { signOut } from "next-auth/react";

const SignOutButton: React.FC = React.memo(() => {
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className="
        w-full
        rounded
        px-2
        py-2
        text-sm
        text-black
        hover:bg-purple-800
        hover:text-white
      "
    >
      Выход
    </button>
  );
});

export default SignOutButton;
