"use client";
import React from "react";
import { signIn } from "next-auth/react";

const SignInButton: React.FC = React.memo(() => {
  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="px-4 py-3.5 text-base text-onPrimary-anti-flash-withe"
    >
      Регистрация
    </button>
  );
});

export default SignInButton;
