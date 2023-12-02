'use client'

import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const PrivatePage: React.FC = React.memo(() => {
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-slate-700">
      <div className="max-w-4xl">
        <p className="text-3xl text-purple-400 font-bold">
          This is a private page
        </p>

        <Link
          href={'/'}
          className="block w-full text-xl p-4 text-center border-2 rounded mt-6 text-purple-300 hover:text-purple-800"
        >
          Return to home
        </Link>

        <button
          type="button"
          onClick={() => signOut({
            callbackUrl: '/',
          })}
          className="w-full text-xl p-4 text-center border-2 rounded mt-6 text-purple-300 hover:text-purple-800"
        >
          Sign out
        </button>
      </div>
    </main>
  );
});

export default PrivatePage;
