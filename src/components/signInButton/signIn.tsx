"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useTranslation } from "@/shared/localization/i18n";

const SignInButton: React.FC = React.memo(async () => {
  const { t } = await useTranslation('en');

  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="px-4 py-3.5 text-base text-onPrimary-anti-flash-withe"
    >
      {t("registration")}
    </button>
  );
});

export default SignInButton;
