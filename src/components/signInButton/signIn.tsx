"use client";
import React from "react";
import { signIn } from "next-auth/react";
import MainButton from "@/ui/mainButton/MainButton";

const SignInButton: React.FC = React.memo(() => {
  return (
    <MainButton
      text="Вход/Регистрация"
      onClick={() => signIn()}
    />
  );
});

export default SignInButton;
