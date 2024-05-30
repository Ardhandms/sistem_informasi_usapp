import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="bg-[#029A4D] h-screen flex justify-center items-center p-8 space-y-8 pt-20">
      <div className="w-full">
        <div className="relative w-[100px] aspect-square mx-auto mb-8">
          <Image
            src="/unsil.png"
            alt="logounsil"
            className="object-contain"
            fill={true}
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl font-bold">Hello,</h1>
          <p>Silahkan masuk untuk melanjutkan</p>
          <form>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm space-y-4">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded-md w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="npm"
                  type="text"
                  placeholder="NPM"
                />
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded-md w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="mt-6">
              <Link href="/beranda" className="block w-full">
                <button className="w-full p-3 rounded-full bg-blue-500">
                  Masuk
                </button>
              </Link>
            </div>
          </form>
          <div className="py-4 text-right">
            <button>Kembali</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
