'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation";

function Footer() {
  const searchParams = useSearchParams();
  const npm = searchParams.get('id');

  return (
    <div className="fixed inset-x-0 bottom-0">

      <footer className="max-w-[380px] mx-auto text-white bg-green-600">
        <nav className="w-full grid grid-cols-5 gap-2">
          <Link
            href=""
            className="flex flex-col justify-center items-center py-3 text-sm text-center gap-1 max-w-[60px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8224b9cb1d1a16b2b345478a682d79206313a86a52ca80a45c796a172403368d?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="News icon"
              className="self-center w-3.5 aspect-square"
            />
            <div>Berita</div>
          </Link>
          <Link
            href=""
            className="flex flex-col justify-center items-center py-3 text-sm text-center gap-1 max-w-[60px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6169decc719a8b0e8f6e951af3d6f51751a8ec5705821d4249ec850be3d69806?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Academic icon"
              className="self-center w-3.5 aspect-square"
            />
            <div>Akademik</div>
          </Link>
          <Link
            href={npm ? `/beranda?id=${npm}` : '/beranda'}
            className="flex flex-col justify-center items-center py-3 text-sm text-center gap-1 max-w-[60px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6015c8e1b283af82fa947c947224f48640602d716ef0f13a5c1a5efe2a92a0d2?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Home icon"
              className="self-center w-3.5 aspect-square"
            />
            <div>Beranda</div>
          </Link>
          <Link
            href=""
            className="flex flex-col justify-center items-center py-3 text-sm text-center gap-1 max-w-[60px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e102894cbd712f59f19465ab4ee257e1db1f4746aa9a40b1025655ff081e1a?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Messages icon"
              className="self-center w-3.5 aspect-square"
            />
            <div>Pesan</div>
          </Link>
          <Link
            href=""
            className="flex flex-col justify-center items-center py-3 text-sm text-center gap-1 max-w-[60px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/467afc63962a75fe52fb6aefd1ddebb32da73df78566ed6aff990cd18570fdf7?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Profile icon"
              className="self-center w-3.5 aspect-square"
            />
            <div>Profil</div>
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
