import React from "react";
import HeaderPresensi from "../components/header/HeaderPresensi";
import Footer from "../components/Footer";

function RiwayatPresensi() {
  return (
    <section>
      <HeaderPresensi />
      <div className="mt-3">
        <div className="flex gap-2.5 justify-center px-4 py-2 text-sm font-semibold text-white bg-green-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f6f991d74537029defc7f8a5661b895aaf94952341dea417dc2b9702504fcc5?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
            alt="Image related to the course"
            className="shrink-0 aspect-[0.84] w-[43px]"
          />
          <p className="my-auto">Riwayat Presensi Mata Kuliah anda</p>
        </div>
        <nav className="flex gap-2 mt-3 w-full text-sm text-center">
          <select
            id="countries"
            className="flex-auto bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option selected>Mata Kuliah</option>
            <option value="CA">Canada</option>
          </select>
          <button className="flex gap-2 justify-center items-center px-4 py-2 font-semibold text-white bg-green-600 rounded-md">
            <span>Filter</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a628da4914651a4c096f890d6afb5f8897404b694ac28a56451589db1d2e6c56?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              className="aspect-square w-[17px]"
              alt="Filter Icon"
            />
          </button>
        </nav>

        <div className="mt-4 text-green-600 space-y-2">
          <div className="bg-gray-100">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 border border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                    Mata Kuliah
                  </th>
                  <th className="py-2 px-4 border border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                    Pertemuan & Metode
                  </th>
                  <th className="py-2 px-4 border border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                    Materi Kuliah
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Jaringan Komputer</td>
                  <td className="py-2 px-4 border border-gray-200 whitespace-nowrap">1 - Offline</td>
                  <td className="py-2 px-4 border border-gray-200">Routing wireless pada mikrotik</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Pemodelan dan Simulasi</td>
                  <td className="py-2 px-4 border border-gray-200 whitespace-nowrap">7 - Online</td>
                  <td className="py-2 px-4 border border-gray-200">Sistem Pakar Keputusan </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default RiwayatPresensi;
