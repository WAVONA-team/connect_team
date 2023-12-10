"use client";
import React from "react";
import { getServerAuthSession } from "@/server/auth";

import Link from "next/link";

const Home: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <section>
      <Link
        href={
          session === null ? `/api/auth/signin` : `/user/${session.user.id}`
        }
        className="rounded bg-purple-800 p-2 text-gray-300"
      >
        Profile
      </Link>
    </section>
  );
};

export default Home;
