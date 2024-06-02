'use client'

import Link from "next/link"
import React, { useEffect, useState, useTransition } from "react"
import JadwalKuliah from "@/components/JadwalKuliah"
import Footer from "@/components/Footer"
import { User } from "@prisma/client";
import { LoaderCircle } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { getUserByNPM } from "@/actions/user"


function Beranda() {
  const [profile, setProfile] = useState<User | null>(null);
  const [fetching, startFetching] = useTransition();
  const searchParams = useSearchParams();
  const npm = searchParams.get('id');
  const navigate = useRouter();

  useEffect(() => {
    if (npm) {
      startFetching(async () => {
        getUserByNPM(npm)
          .then((res) => {
            if (res) setProfile(res);
          });
      });
    } else navigate.push('/');
  }, []);

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
            {(!profile || fetching) ? (
              <div className="h-[120px] flex items-center justify-center">
                <LoaderCircle className="w-8 h-8 animate-spin" />
              </div>
            ) : (
              <>
                <div className="w-full flex justify-between gap-4">
                  <div className="">
                    <div className="text-base text-lime-300">Selamat Datang</div>
                    <div className="text-2xl font-semibold uppercase">
                      {profile.name}
                    </div>
                  </div>
                  <div className="w-[60px] text-right">
                    <div className="text-sm text-lime-300">IPK</div>
                    <div className="text-3xl text-white font-semibold">{Number(profile.ipk).toFixed(2)}</div>
                  </div>
                </div>
                <div className="flex gap-6 mt-4">
                  <div className="w-[100px]">
                    <img
                      loading="lazy"
                      src={profile.image}
                      alt="Student profile picture"
                      className="w-full aspect-[0.68]"
                    />
                  </div>
                  <div className="flex z-10 flex-col self-center mt-0 text-sm text-lime-300">
                    <div>
                      <h4>Periode Akademik</h4>
                      <p className="text-lg text-white">{profile.periodeAkademik}</p>
                    </div>
                    <div>
                      <h4 className="mt-2">Jenjang Akademik</h4>
                      <p className="text-lg text-white">{profile.jenjangAkademik}</p>
                    </div>
                    <div className="flex flex-col mt-2">
                      <h4 className="text-sm text-lime-300">Dosen Wali</h4>
                      <p className="text-lg text-white">
                        {profile.waliDosen}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
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
            <Link href={`/presensi?id=${npm}`}>Presensi Sekarang</Link>
          </button>
          <button className="justify-center px-6 py-2 text-green-600 rounded-md border border-green-600 border-solid shadow-sm">
            <Link href={`/riwayatpresensi?id=${npm}`}>Riwayat Presensi</Link>
          </button>
        </div>

        <JadwalKuliah />
      </section>
      <Footer />
    </>
  );
}

export default Beranda;
