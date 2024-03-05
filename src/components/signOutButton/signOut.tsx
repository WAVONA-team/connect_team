"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useTranslation } from "@/shared/localization/i18n";

const SignOutButton: React.FC = React.memo( async () => {
  const { t } = await useTranslation('ru');

  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="
        w-full
        rounded
      "
    >
      {t("signOut")}
    </button>
  );
});

export default SignOutButton;
