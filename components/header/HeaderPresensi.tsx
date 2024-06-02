import { useEffect, useState, useTransition } from 'react'
import { User } from '@prisma/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { getUserByNPM } from '@/actions/user'
import { LoaderCircle } from 'lucide-react';

function HeaderPresensi() {
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
    <header className="flex flex-col self-stretch pt-2 w-full bg-green-600 rounded-b-3xl">
      {(!profile || fetching) ? (
        <div className="w-full py-16 flex items-center justify-center">
          <LoaderCircle className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <div className="p-8 grid grid-cols-2 gap-4">
          <div className="w-full overflow-hidden">
            <div className="text-base text-lime-300">Presensi</div>
            <div className="text-2xl font-semibold uppercase">
              {profile.name}
            </div>
          </div>
          <div className="flex z-10 flex-col self-center mt-0 text-sm text-lime-300">
            <div>
              <h4>Periode Akademik</h4>
              <p className="text-lg text-white">{profile.periodeAkademik}</p>
            </div>
            <div>
              <h4 className="mt-2">Jurusan</h4>
              <p className="text-lg text-white">{profile.jurusan}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderPresensi;
