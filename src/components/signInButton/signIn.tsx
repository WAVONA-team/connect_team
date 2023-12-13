"use client";
import React from "react";
import { signIn } from "next-auth/react";

const SignInButton: React.FC = React.memo(() => {
  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="
        w-full
        rounded
        px-2
        py-2
        text-sm
      text-white
        hover:bg-purple-800
      "
    >
      Регистрация/Вход
    </button>
  );
});

export default SignInButton;
