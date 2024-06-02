'use client'

import HeaderPresensi from "../../components/header/HeaderPresensi"
import Footer from "../../components/Footer"
import { useEffect, useState, useTransition } from "react"
import { Presensi } from "@prisma/client"
import { useRouter, useSearchParams } from "next/navigation"
import { LoaderCircle } from "lucide-react"
import { getPresensiByNPM } from "@/actions/presensi"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function RiwayatPresensi() {
  const [daftarPresensi, setDaftarPresensi] = useState<Presensi[] | null>(null);
  const [filter, setFilter] = useState('');
  const [fetching, startFetching] = useTransition();
  const searchParams = useSearchParams();
  const npm = searchParams.get('id');
  const navigate = useRouter();

  const handleFilter = () => {
    if (!filter.length || !npm) return;
    if (filter === 'all') {
      startFetching(async () => {
        getPresensiByNPM(npm)
          .then((res) => {
            if (res) setDaftarPresensi(res);
          });
      });
    } else {
      startFetching(async () => {
        getPresensiByNPM(npm, filter)
          .then((res) => {
            if (res) setDaftarPresensi(res);
          });
      });
    }
  }

  useEffect(() => {
    if (npm) {
      startFetching(async () => {
        getPresensiByNPM(npm)
          .then((res) => {
            if (res) setDaftarPresensi(res);
            else navigate.push('/');
          });
      });
    } else navigate.push('/');
  }, []);

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
          <Select onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Mata Kuliah" />
            </SelectTrigger>
            <SelectContent className="max-h-[250px]">
              <SelectItem value="all">Semua Mata Kuliah</SelectItem>
              <SelectItem value="Jaringan Komputer">Jaringan Komputer</SelectItem>
              <SelectItem value="Pemodelan dan Simulasi">Pemodelan dan Simulasi</SelectItem>
              <SelectItem value="Keamanan Informasi">Keamanan Informasi</SelectItem>
              <SelectItem value="Analisa Numerik">Analisa Numerik</SelectItem>
              <SelectItem value="Pemrograman Web">Pemrograman Web</SelectItem>
              <SelectItem value="Sistem Operasi">Sistem Operasi</SelectItem>
              <SelectItem value="Sistem Informasi">Sistem Informasi</SelectItem>
              <SelectItem value="Sosioteknologi Informasi">Sosioteknologi Informasi</SelectItem>
              <SelectItem value="Etika Profesi">Etika Profesi</SelectItem>
            </SelectContent>
          </Select>
          <button
            onClick={handleFilter}
            className="flex gap-2 justify-center items-center px-4 py-2 font-semibold text-white bg-green-600 rounded-md"
            disabled={fetching}
          >
            <span>Filter</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a628da4914651a4c096f890d6afb5f8897404b694ac28a56451589db1d2e6c56?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              className="aspect-square w-[17px]"
              alt="Filter Icon"
            />
          </button>
        </nav>

        {(!daftarPresensi || fetching) && (
          <div className="h-[250px] w-full flex justify-center items-center text-gray-400">
            <LoaderCircle className="w-8 h-8 animate-spin" />
          </div>
        )}

        {!fetching && daftarPresensi && !!daftarPresensi.length && (
          <div className="mt-4 text-green-600 bg-gray-100 w-full overflow-x-auto space-y-2">
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
                  <th className="py-2 px-4 border border-gray-200 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                    Bukti Kuliah
                  </th>
                </tr>
              </thead>
              <tbody>
                {daftarPresensi.map((presensi) => (
                  <tr key={`presensi-${presensi.id}`}>
                    <td className="py-2 px-4 border border-gray-200">{presensi.mataKuliah}</td>
                    <td className="py-2 px-4 border border-gray-200 capitalize">
                      {presensi.pertemuanKe} - {presensi.metodeKuliah}
                    </td>
                    <td className="py-2 px-4 border border-gray-200">
                      {presensi.materiPerkuliahan}
                    </td>
                    <td className="p-2 border border-gray-200">
                      <img
                        src={presensi.buktiPoto}
                        alt="bukti foto"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!fetching && daftarPresensi && !daftarPresensi.length && (
          <div className="h-[250px] w-full flex justify-center items-center text-sm text-gray-400">
            Riwayat presensi masih kosong!
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}

export default RiwayatPresensi;
