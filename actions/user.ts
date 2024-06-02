'use server'

import { prisma } from "@/db"

export const createUser = async () => {
  await prisma.user.create({
    data: {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30b82e7711a2ff73eb21a72609260ffbbb566100df1534caa6d5041bb3ce06bf?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&',
      ipk: 4.00,
      jenjangAkademik: 'S1',
      jurusan: 'Informatika',
      name: 'Salman Miqdad',
      npm: '227006004',
      password: '12345678',
      periodeAkademik: '2023/2024',
      waliDosen: 'Dr. Ir. Aradea, S.T M.T.'
    }
  });
}

export const getUserByNPM = async (NPM: string) => {
  try {
    return await prisma.user.findUnique({
      where: { npm: NPM }
    });
  } catch (error) {
    return null
  }
}