import Link from "next/link";
import React from "react";

function Beranda() {
  return (
    <section className="mx-auto items-center justify-center font-medium bg-white max-w-[360px]">
      <header className="flex flex-col self-stretch pt-12 pb-6 w-full bg-green-600 rounded-none">
        <div className="flex z-10 flex-col self-end whitespace-nowrap w-[69px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9ad0bd580de7f455b8910b550a236a7d1100ecbdba9924386126591e3ebfe2?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
            alt=""
            className="self-end aspect-square w-[41px]"
          />
          <div className="mt-7 text-sm text-lime-300">IPK</div>
          <div className="mt-6 text-3xl text-white">-.--</div>
        </div>
        <div className="flex flex-col px-4 py-px mt-0 w-full">
          <div className="text-base text-lime-300">Selamat Datang</div>
          <div className="flex flex-col mt-1.5 max-w-full text-2xl font-semibold text-white whitespace-nowrap w-[100px]">
            <div>
              SALMAN
              <br />
              MIQDAD
            </div>
            <img
              loading="lazy"
              src=""
              alt=""
              className="mt-4 w-full aspect-[0.68]"
            />
          </div>
          <section className="flex z-10 flex-col self-center mt-0 text-sm text-lime-300">
            <div>Periode Akademik</div>
            <div className="mt-2 text-xl text-white">2023/2024</div>
            <div className="mt-3">Jengjang Akademik</div>
            <div className="mt-1 text-xs text-white">()</div>
          </section>
          <div className="flex flex-col self-end mt-6">
            <div className="text-sm text-lime-300">Dosen Wali</div>
            <div className="mt-2 text-xl text-white">
              Dr. Ir. Aradea, S.T M.T.
            </div>
          </div>
        </div>
      </header>
      <nav className="flex gap-2.5 justify-center px-4 py-2 mt-3 text-sm font-semibold text-white bg-green-600">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0503741e408572c8052a29497c5e89e9e93601e52fefb58819b579afab9d73e?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
          alt="Reminder icon"
          className="shrink-0 w-11 aspect-[0.86]"
        />
        <div className="my-auto">Jangan Lupa Presensi Hari ini!!</div>
      </nav>
      <div className="flex gap-3 mt-5 text-sm font-semibold text-center justify-center">
        <button className="justify-center px-5 py-2 text-white bg-green-600 rounded-md shadow-sm">
          <Link href="/presensi">Presensi Sekarang</Link>
        </button>
        <button className="justify-center px-6 py-2 text-green-600 rounded-md border border-green-600 border-solid shadow-sm">
          <Link href="/riwayatpresensi">Riwayat Presensi</Link>
        </button>
      </div>
      <h2 className="mt-12 text-base font-bold text-green-600">
        Jadwal yang akan datang
      </h2>
      <section className="flex flex-col justify-center px-2 py-1.5 mt-4 w-full text-sm font-bold text-green-600 bg-zinc-100">
        <div>Senin, 27 Mei 2024</div>
        <div className="flex gap-5 items-center mt-2">
          <div>JARINGAN KOMPUTER</div>
          <div className="self-stretch my-auto">|</div>
          <div className="flex flex-col self-stretch py-1 whitespace-nowrap">
            <div>(07:00:00)-</div>
            <div className="mt-1.5">-(09:30:00)</div>
          </div>
          <div className="self-stretch my-auto">|</div>
          <div className="self-stretch my-auto">FT1-2B</div>
        </div>
        <div className="flex gap-5 items-center mt-3">
          <div>PEMODELAN DAN SIMULASI</div>
          <div className="self-stretch my-auto">|</div>
          <div className="flex flex-col self-stretch py-1 whitespace-nowrap">
            <div>(13:00:00)-</div>
            <div className="mt-1.5">-(15:30:00)</div>
          </div>
          <div className="self-stretch my-auto">|</div>
          <div className="self-stretch my-auto">FT1-2N</div>
        </div>
      </section>
      <footer className="flex flex-col justify-center self-stretch p-1.5 mt-14 w-full text-sm text-white whitespace-nowrap bg-green-600">
        <nav className="flex gap-3 justify-between">
          <Link
            href="/berita"
            className="flex flex-col justify-center px-2.5 py-2.5 max-w-[60px]"
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
            href="/akademik"
            className="flex flex-col justify-center my-auto text-xs"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6169decc719a8b0e8f6e951af3d6f51751a8ec5705821d4249ec850be3d69806?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Academic icon"
              className="self-center w-3.5 aspect-square"
            />
            <div className="mt-1.5">Akademik</div>
          </Link>
          <div className="flex flex-col justify-center py-2 max-w-[60px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6015c8e1b283af82fa947c947224f48640602d716ef0f13a5c1a5efe2a92a0d2?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Home icon"
              className="self-center aspect-square w-[17px]"
            />
            <div>Beranda</div>
          </div>
          <Link
            href="/pesan"
            className="flex flex-col justify-center px-2.5 py-2.5 max-w-[60px]"
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
            href="/profil"
            className="flex flex-col justify-center px-3.5 py-2.5 max-w-[60px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/467afc63962a75fe52fb6aefd1ddebb32da73df78566ed6aff990cd18570fdf7?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Profile icon"
              className="self-center w-full aspect-[1.08]"
            />
            <div>Profil</div>
          </Link>
        </nav>
      </footer>
    </section>
  );
}

export default Beranda;
