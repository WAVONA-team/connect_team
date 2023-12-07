'use client'

import React from 'react';
import { signIn, useSession } from 'next-auth/react';

import Link from 'next/link';

const Home: React.FC = React.memo(() => {
  const { data: session, status } = useSession();

  return (
    <section>
      {status === "authenticated" ? (
        <Link
          href={`/user/${session.user.id}`}
          className="bg-purple-800 text-gray-300 p-2 rounded"
        >
          Profile
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => signIn()}
          className="bg-purple-800 text-gray-300 p-2 rounded"
        >
          Registration
        </button>
      )}
    </section>
  );
});

export default Home;
