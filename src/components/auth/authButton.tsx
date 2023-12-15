"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { type FC } from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  image: HTMLImageElement;
  text: string;
  provider: "google" | "github" | "vk";
};

const AuthButton: FC<Props> = ({ image, text, provider }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  console.log(callbackUrl);
  const handleClick = async () => {
    await signIn(provider, { callbackUrl });
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="justify-left flex cursor-pointer items-center gap-3 rounded-xl bg-gray-1 px-16 py-5 hover:bg-neutral-700"
      >
        <Image src={image} alt={text} />
        <p className="font-inter text-xl font-normal text-white">{text}</p>
      </div>
    </>
  );
};
export default AuthButton;
