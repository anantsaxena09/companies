'use client'
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-10">
      <div className="bg-white p-10 rounded-xl shadow-2xl transform transition-transform hover:scale-105">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-black">
          Welcome!
        </h1>
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold p-3 rounded-lg w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
