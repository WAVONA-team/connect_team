"use client";
import React from "react";
import { useRouter } from "next/navigation";

import arrowDown from "../../../public/images/arrowDown.svg";
import Image from "next/image";

const BackButton: React.FC = React.memo(() => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        router.back();
      }}
    >
      <Image
        src={arrowDown as string}
        alt="Навигация назад"
        className="rotate-90"
      />
    </button>
  );
});

export default BackButton;
