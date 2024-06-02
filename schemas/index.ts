import { z } from "zod";

export const loginSchema = z.object({
  NPM: z.string()
    .min(8, "NPM harus memiliki setidaknya 8 karakter")
    .max(12, "NPM harus memiliki maksimal 12 karakter")
    .refine((value) => !isNaN(+value), 'NPM harus angka'),
  password: z.string()
    .min(6, "Password harus memiliki setidaknya 6 karakter")
    .max(20, "Password harus memiliki maksimal 20 karakter"),
});

export const presensiSchemaRaw = {
  mataKuliah: z.string().min(1, 'Mata kuliah harus diisi'),
  pertemuan: z.string().min(1, 'Pertemuan harus diisi'),
  materiKuliah: z.string().min(1, 'Materi kuliah harus diisi'),
  metodePertemuan: z.string().min(1, 'Metode pertemuan harus diisi'),
  image: z.custom<FileList[0] | undefined>()
    .refine((file) => !(file === undefined || file === null), {
      message: "Bukti perkuliahan harus diisi",
    })
    .refine((file) => file && (!!file && file.size <= 5 * 1024 * 1024), {
      message: "Gambar maksimal memiliki ukuran sebesar 5MB",
    })
    .refine((file) => file && (!!file && file.type?.startsWith("image")), {
      message: "Hanya gambar yang diizinkan",
    })
}

export const presensiSchema = z.object(presensiSchemaRaw);