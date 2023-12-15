import React from "react";
import { getServerAuthSession } from "@/server/auth";

import Link from "next/link";

const Home: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <section>
      <Link
        href={session === null ? `/auth/login` : `/user/${session.user?.id}`}
        className="text-gray-300 rounded bg-purple-800 p-2"
      >
        Profile
      </Link>
    </section>
  );
};

export default Home;
