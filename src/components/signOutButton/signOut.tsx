"use client";
import React from "react";
import { signOut } from "next-auth/react";

const SignOutButton: React.FC = React.memo(() => {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="
        w-full
        rounded
      "
    >
      Выход
    </button>
  );
});

export default SignOutButton;
