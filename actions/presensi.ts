'use server'

import { prisma } from "@/db";
import { presensiSchema, presensiSchemaRaw } from "@/schemas";
import { z } from "zod";

const schema = z.object({
  ...presensiSchemaRaw,
  image: z.string().min(1)
});

export const createPresensi = async (values: z.infer<typeof schema>, npm: string) => {
  const validatedFields = schema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Input tidak valid' }
  }

  const user = await prisma.user.findUnique({
    where: { npm }
  });

  if (user) {
    try {
      await prisma.presensi.create({
        data: {
          buktiPoto: values.image,
          mataKuliah: values.mataKuliah,
          materiPerkuliahan: values.materiKuliah,
          metodeKuliah: values.metodePertemuan,
          pertemuanKe: values.pertemuan,
          idUser: user.id
        }
      });

      return { success: 'Produk berhasil di unggah!' }
    } catch (error) {
      return { error: 'Terjadi kesalahan di server!' }
    }
  } else {
    return { error: 'User tidak ditemukan' }
  }
}

export const getPresensiByNPM = async (npm: string, mataKuliah?: string) => {
  const user = await prisma.user.findUnique({
    where: { npm }
  });

  if (!user) {
    return null;
  }

  const filter = { idUser: user.id };

  try {
    return await prisma.presensi.findMany({
      where: mataKuliah ? {
        ...filter,
        mataKuliah
      } : filter
    });
  } catch (error) {
    return null
  }
}