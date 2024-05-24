import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <section className="flex items-center justify-center bg-[#029A4D] min-h-screen">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Image
            src="/unsil.png"
            alt="logounsil"
            width={140}
            height={140}
            className="mt-[85px]"
          />
        </div>

        <div className="text-center mt-4">
          <h1 className="text-4xl font-bold text-white">Hello,</h1>
          <p className="font-thin text-white">
            Silahkan masuk untuk melanjutkan
          </p>
        </div>

        <form className="py-6 px-4">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="npm"
              >
                NPM
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="npm"
                type="number"
                placeholder="NPM"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-6">
            <Link
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-[#2196F3] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-xl"
              href="/beranda"
            >
              Masuk
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
