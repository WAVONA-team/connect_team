"use client";
import React from "react";
import { signIn } from "next-auth/react";

import Image from "next/image";

type Props = {
  image: HTMLImageElement;
  text: string;
  provider: "google" | "github" | "vk";
};

const AuthButton: React.FC<Props> = ({ image, text, provider }) => {
  const handleClick = async () => {
    await signIn(provider, { callbackUrl: `/pages/projects` });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="justify-left bg-gray-1 flex cursor-pointer items-center gap-3 rounded-xl px-16 py-5 hover:bg-neutral-700"
    >
      <Image src={image} alt={text} />
      <p className="font-inter text-xl font-normal text-white">{text}</p>
    </button>
  );
};
export default AuthButton;
