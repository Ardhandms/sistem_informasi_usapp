import React from 'react'

const jadwal = [
  {
    mataKuliah: 'Jaringan Komputer',
    jadwal: '08:00 - 10:00',
    kelas: 'FT1-2B'
  },
  {
    mataKuliah: 'Pemodelan dan Simulasi',
    jadwal: '10:00 - 12:00',
    kelas: 'FT1-2N'
  }
];

function JadwalKuliah() {
  return (
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
            {jadwal.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border border-gray-200">{item.mataKuliah}</td>
                <td className="py-2 px-4 border border-gray-200 whitespace-nowrap">{item.jadwal}</td>
                <td className="py-2 px-4 border border-gray-200">{item.kelas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JadwalKuliah