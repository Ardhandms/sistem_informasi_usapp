import React from "react";
import Footer from "../components/Footer";
import HeaderPresensi from "../components/header/HeaderPresensi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Presensi() {
  return (
    <section className="mx-auto items-center justify-center font-medium bg-white max-w-[400px] mt-[-50px]">
      <div>
        <HeaderPresensi />
        <div className="flex gap-2.5 justify-center px-4 py-2 mt-2 text-sm font-semibold text-white bg-green-600">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aa4760aa4493a210d0b41cea672a367a62493d2a228510a3183e6f7c68781b8?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
            alt="Main banner image"
            className="shrink-0 aspect-[0.84] w-[43px]"
          />
          <p className="my-auto">Pengisian Presensi Mata Kuliah</p>
        </div>
        <form className="flex flex-col items-center mt-9 w-full px-5">
          <label className="sr-only">Mata Kuliah</label>
          <section className="flex gap-5 justify-between py-3 pr-3.5 pl-1.5 w-full text-base text-center rounded-md border border-solid bg-zinc-100 border-neutral-400 text-stone-400">
            <p id="subject">Mata Kuliah</p>
            <DropdownMenu>
              <DropdownMenuTrigger>"Open"</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Mata Kuliah</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Jaringan Komputer</DropdownMenuItem>
                <DropdownMenuItem>Sistem Informasi</DropdownMenuItem>
                <DropdownMenuItem>Kemananan Informasi</DropdownMenuItem>
                <DropdownMenuItem>Analisa Numerik</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <label className="sr-only">Pertemuan</label>
          <section className="flex gap-5 justify-between py-3 pr-3.5 pl-1.5 mt-2.5 w-full text-base text-center rounded-md border border-solid bg-zinc-100 border-neutral-400 text-stone-400">
            <p id="meeting">Pertemuan</p>
            <DropdownMenu>
              <DropdownMenuTrigger>"Open"</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Pertemuan</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Pertemuan 1</DropdownMenuItem>
                <DropdownMenuItem>Pertemuan 2</DropdownMenuItem>
                <DropdownMenuItem>Pertemuan 3</DropdownMenuItem>
                <DropdownMenuItem>Pertemuan 4</DropdownMenuItem>
                <DropdownMenuItem>Pertemuan 5</DropdownMenuItem>
                <DropdownMenuItem>Pertemuan 6</DropdownMenuItem>
                <DropdownMenuItem>Pertemuan 7</DropdownMenuItem>
                <DropdownMenuItem>
                  Pertemuan 8 (Ulangan Tengah Semester)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <label className="flex gap-5 justify-between py-3 pr-3.5 pl-1.5 mt-2.5 w-full text-base text-center">
            <input
              className="w-full justify-center py-3 pr-5 pl-1.5 mt-2.5 text-base text-start rounded-md border border-solid bg-zinc-100 border-neutral-400 text-stone-800"
              id="materi"
              type="text"
              placeholder="Materi Perkuliahan"
            />
          </label>
          <label className="sr-only">Metode Perkuliahan</label>
          <section className="flex gap-5 justify-between py-3 pr-3.5 pl-1.5 mt-2.5 w-full text-base text-center rounded-md border border-solid bg-zinc-100 border-neutral-400 text-stone-400">
            <p id="lecture_method">Metode Perkuliahan</p>
            <DropdownMenu>
              <DropdownMenuTrigger>"Open"</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Metode Perkuliahan</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Tatap Muka</DropdownMenuItem>
                <DropdownMenuItem>Tatap Maya/Online</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <label className="sr-only">Upload Bukti Perkuliahan</label>
          <section className="flex gap-5 justify-between py-2 pr-2.5 pl-1.5 mt-2.5 w-full text-base text-center rounded-md border border-solid bg-zinc-100 border-neutral-400 text-stone-200">
            <p id="upload_evidence" className="my-auto">
              Upload Bukti Perkuliahan
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3515565e0f6b9a847d35f647736013c1f3e3b1fae9c975690dca6e46092eb259?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Upload icon"
              className="shrink-0 w-6 aspect-square"
            />
          </section>
          <button
            type="submit"
            className="w-[165px] justify-center items-center px-16 py-2 mt-9 max-w-full text-sm font-semibold text-center text-white whitespace-nowrap bg-green-600 rounded-md shadow-sm"
          >
            Kirim
          </button>
        </form>
        <Footer />
      </div>
    </section>
  );
}

export default Presensi;
