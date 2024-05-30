import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";

function Beranda() {
  return (
    <>
      <section className="font-medium bg-white mt-[-5px] pb-20">
        <header className="flex flex-col self-stretch pt-2 pb-6 w-full bg-green-600 rounded-b-3xl">
          <div className="flex z-10 flex-col self-end whitespace-nowrap p-2 pb-0">
            <div className="p-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9ad0bd580de7f455b8910b550a236a7d1100ecbdba9924386126591e3ebfe2?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
                alt=""
                className="self-end aspect-square w-[35px]"
              />
            </div>
          </div>
          <div className="px-4 py-10">
            <div className="w-full flex justify-between gap-4">
              <div className="">
                <div className="text-base text-lime-300">Selamat Datang</div>
                <div className="text-2xl font-semibold uppercase">
                  Salman Miqdad
                </div>
              </div>
              <div className="w-[55px]">
                <div className="text-sm text-lime-300">IPK</div>
                <div className="text-3xl text-white">-.--</div>
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="w-[100px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b82e7711a2ff73eb21a72609260ffbbb566100df1534caa6d5041bb3ce06bf?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
                  alt="Student profile picture"
                  className="w-full aspect-[0.68]"
                />
              </div>
              <div className="flex z-10 flex-col self-center mt-0 text-sm text-lime-300">
                <div>
                  <h4>Periode Akademik</h4>
                  <p className="text-lg text-white">2023/2024</p>
                </div>
                <div>
                  <h4 className="mt-2">Jengjang Akademik</h4>
                  <p className="text-xs text-white">()</p>
                </div>
                <div className="flex flex-col mt-2">
                  <h4 className="text-sm text-lime-300">Dosen Wali</h4>
                  <p className="text-lg text-white">
                    Dr. Ir. Aradea, S.T M.T.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex gap-2.5 justify-center px-4 py-2 mt-3 text-sm font-semibold text-white bg-green-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0503741e408572c8052a29497c5e89e9e93601e52fefb58819b579afab9d73e?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
            alt="Reminder icon"
            className="shrink-0 w-11 aspect-[0.86]"
          />
          <div className="my-auto">Jangan Lupa Presensi Hari ini!!</div>
        </div>
        <div className="flex gap-3 mt-5 text-sm font-semibold text-center justify-center">
          <button className="justify-center px-5 py-2 text-white bg-green-600 rounded-md shadow-sm">
            <Link href="/presensi">Presensi Sekarang</Link>
          </button>
          <button className="justify-center px-6 py-2 text-green-600 rounded-md border border-green-600 border-solid shadow-sm">
            <Link href="/riwayatpresensi">Riwayat Presensi</Link>
          </button>
        </div>

        <div className="mt-12 text-green-600 space-y-2">
          <h2 className="text-center text-base font-bold">
            Jadwal yang akan datang
          </h2>
          <div className="bg-gray-100">
            <p className="px-4 py-2 text-sm border border-b-0">Hari: Senin, 12 Mei 2024</p>
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 border border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Mata Kuliah</th>
                  <th className="py-2 px-4 border border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Jadwal</th>
                  <th className="py-2 px-4 border border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Kelas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Jaringan Komputer</td>
                  <td className="py-2 px-4 border border-gray-200 whitespace-nowrap">08:00 - 10:00</td>
                  <td className="py-2 px-4 border border-gray-200">FT1-2B</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Pemodelan dan Simulasi</td>
                  <td className="py-2 px-4 border border-gray-200 whitespace-nowrap">10:00 - 12:00</td>
                  <td className="py-2 px-4 border border-gray-200">FT1-2N</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Beranda;
