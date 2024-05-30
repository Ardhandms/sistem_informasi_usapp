import React from "react";

function HeaderPresensi() {
  return (
    <header className="flex flex-col self-stretch pt-2 w-full bg-green-600 rounded-b-3xl">
      <div className="p-8 grid grid-cols-2 gap-4">
        <div className="">
          <div className="text-base text-lime-300">Presensi</div>
          <div className="text-2xl font-semibold uppercase">
            Salman Miqdad
          </div>
        </div>
        <div className="flex z-10 flex-col self-center mt-0 text-sm text-lime-300">
          <div>
            <h4>Periode Akademik</h4>
            <p className="text-lg text-white">2023/2024</p>
          </div>
          <div>
            <h4 className="mt-2">Jurusan</h4>
            <p className="text-xs text-white">Informatika | 227006009</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPresensi;
