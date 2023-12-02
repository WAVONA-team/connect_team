'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import Link from 'next/link';

const Home: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const res = await signIn('credentials', {
      login: formData.get('login'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      router.push('/privatePage')
    } else {
      console.log(res);
    };
  };

  return (
    <main className="flex h-screen items-center justify-center bg-slate-700">
      <div className="flex max-w-lg flex-col">
        <p className="text-5xl font-medium text-purple-300">
          This is home page
        </p>

        <p className="mt-4 w-full text-left text-xl text-purple-100">
          login/signup
        </p>

        <form
          action="#"
          className="mt-2 grid grid-rows-4 gap-y-4"
          onSubmit={handleSubmit}
        >
          <input
            required
            name="login"
            type="text"
            placeholder="login"
            className="rounded p-2 row-span-1"
          />

          <input
            required
            name="password"
            type="password"
            placeholder="password"
            className="rounded p-2 row-span-1"
          />

          <button
            type="submit"
            className="p-2 row-span-2 rounded text-purple-800 text-3xl bg-slate-100 hover:text-purple-300"
          >
            Submit
          </button>
        </form>

        <Link
          href={'/publicPage'}
          className="text-xl p-4 text-center border-2 rounded mt-6 text-purple-300 hover:text-purple-800"
        >
          To public page
        </Link>
      </div>
    </main>
  );
};

export default Home;
