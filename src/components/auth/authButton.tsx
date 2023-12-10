"use client";
import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
  const handleClick = async () => {
    await signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="inline-block w-full rounded-lg border border-gray-200 py-2.5 text-center text-sm font-normal text-gray-500 shadow-sm transition duration-200 hover:shadow-md"
    >
      Google
    </button>
  );
}

export function GithubSignInButton() {
  const handleClick = async () => {
    await signIn("github");
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="inline-block w-full rounded-lg border border-gray-200 py-2.5 text-center text-sm font-normal text-gray-500 shadow-sm transition duration-200 hover:shadow-md"
    >
      Github
    </button>
  );
}
