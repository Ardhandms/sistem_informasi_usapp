import React from "react";

function HeaderPresensi() {
  return (
    <section className="mx-auto items-center justify-center font-medium bg-white max-w-[400px] mt-[-50px]">
      <header className="flex gap-5 justify-between self-stretch px-8 py-12 w-full bg-green-600 rounded-3xl">
        <div className="flex flex-col self-start whitespace-nowrap mt-12">
          <p className="text-base text-lime-300">Presensi</p>
          <h1 className="mt-2.5 text-2xl font-semibold text-white">
            ARDHAN <br /> DIMAS <br /> Nuryadin
          </h1>
        </div>
        <div className="flex flex-col text-sm font-medium text-lime-300 mt-12">
          <p>Periode Akademik</p>
          <p className="mt-2 text-xl text-white">2023/2024</p>
          <p className="mt-3">Jurusan</p>
          <p className="text-xs text-white">Informatika | 227006025</p>
        </div>
      </header>
    </section>
  );
}

export default HeaderPresensi;
