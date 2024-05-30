import React from "react";
import HeaderPresensi from "../components/header/HeaderPresensi";
import Footer from "../components/Footer";

function RiwayatPresensi() {
  return (
    <section>
      <HeaderPresensi />
      <div className="mx-auto items-center justify-center font-medium bg-white max-w-[380px] mt-[10px]">
        <div className="flex gap-2.5 justify-center px-4 py-2 text-sm font-semibold text-white bg-green-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f6f991d74537029defc7f8a5661b895aaf94952341dea417dc2b9702504fcc5?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
            alt="Image related to the course"
            className="shrink-0 aspect-[0.84] w-[43px]"
          />
          <p className="my-auto">Riwayat Presensi Mata Kuliah anda</p>
        </div>
        <nav className="flex gap-2 mt-3 w-full text-sm text-center ml-4">
          <button className="flex flex-col justify-center py-3 font-light bg-white rounded-md border border-solid border-zinc-100 text-zinc-300">
            <span className="flex gap-1.5 pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61d7ca24d4605421dfd7368944e01f4ffc6d642209720a61b1e3d2863d30fe4?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
                className="shrink-0 aspect-square w-[17px]"
                alt="Pencarian Icon"
              />
              Pencarian
            </span>
          </button>
          <button className="flex gap-2.5 justify-center px-5 py-3 font-semibold text-white bg-green-600 rounded-md">
            <span>Filter</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a628da4914651a4c096f890d6afb5f8897404b694ac28a56451589db1d2e6c56?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              className="shrink-0 aspect-square w-[17px]"
              alt="Filter Icon"
            />
          </button>
        </nav>
        <div className="flex flex-col justify-center px-1 py-2 mt-6 w-full text-sm font-bold text-green-600 bg-zinc-100">
          <div className="flex gap-5 items-center px-5">
            <p>
              Sistem <br /> Informasi
            </p>
            <p className="self-stretch my-auto">|</p>
            <p className="justify-center self-stretch px-px py-1 my-auto">
              Pertemuan 2
            </p>
            <p className="self-stretch my-auto">|</p>
            <a href="#" className="self-stretch my-auto underline">
              More&gt;&gt;
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center px-1 py-2 w-full text-sm font-bold text-green-600 bg-zinc-100">
          <div className="flex gap-5 items-center px-5">
            <p>
              Sistem <br /> Informasi
            </p>
            <p className="self-stretch my-auto">|</p>
            <p className="justify-center self-stretch px-px py-1 my-auto">
              Pertemuan 2
            </p>
            <p className="self-stretch my-auto">|</p>
            <a href="#" className="self-stretch my-auto underline">
              More&gt;&gt;
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center px-1 py-2 w-full text-sm font-bold text-green-600 bg-zinc-100">
          <div className="flex gap-5 items-center px-5">
            <p>
              Analisa <br /> Numerik
            </p>
            <p className="self-stretch my-auto">|</p>
            <p className="justify-center self-stretch px-px py-1 my-auto">
              Pertemuan 4
            </p>
            <p className="self-stretch my-auto">|</p>
            <a href="#" className="self-stretch my-auto underline">
              More&gt;&gt;
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center px-1 py-2 w-full text-sm font-bold text-green-600 bg-zinc-100">
          <div className="flex gap-5 items-center px-5">
            <p>
              Jaringan <br /> Komputer
            </p>
            <p className="self-stretch my-auto">|</p>
            <p className="justify-center self-stretch px-px py-1 my-auto">
              Pertemuan 3
            </p>
            <p className="self-stretch my-auto">|</p>
            <a href="#" className="self-stretch my-auto underline">
              More&gt;&gt;
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default RiwayatPresensi;
