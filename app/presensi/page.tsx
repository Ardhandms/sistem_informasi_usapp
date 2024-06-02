'use client'

import { presensiSchema } from '@/schemas'
import Footer from '../../components/Footer'
import HeaderPresensi from '../../components/header/HeaderPresensi'
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import Image from 'next/image'
import { LoaderCircle, Trash } from 'lucide-react'
import { createPresensi } from '@/actions/presensi'
import { FormError } from '@/components/FormError'

function Presensi() {
  const [error, setError] = useState('');
  const [isPending, startFetching] = useTransition();
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const npm = searchParams.get('id') || '';

  const form = useForm<z.infer<typeof presensiSchema>>({
    resolver: zodResolver(presensiSchema),
    defaultValues: {
      mataKuliah: '',
      materiKuliah: '',
      pertemuan: '',
      metodePertemuan: ''
    },
  })

  function onSubmit(values: z.infer<typeof presensiSchema>) {
    setError('');

    const reader = new FileReader();
    reader.readAsDataURL(values.image!);

    reader.onload = () => {
      const base64Image = reader.result as string;
      const dataToSend = { ...values, image: base64Image };

      startFetching(async () => {
        createPresensi(dataToSend, npm).then((data) => {
          if (data.error) setError(data?.error || '');
          if (data.success) {
            navigate.push(`/riwayatpresensi?id=${npm}`);
          }
        });
      });
    };

    reader.onerror = () => {
      setError('');
    };
  }

  return (
    <>
      <section className="font-medium bg-white mt-[-5px] pb-20">
        <HeaderPresensi />
        <div className="px-4 space-y-8">
          <div className="flex gap-2.5 justify-center px-4 py-2 mt-3 text-sm font-semibold text-white bg-green-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0503741e408572c8052a29497c5e89e9e93601e52fefb58819b579afab9d73e?apiKey=f3e3f045e13e442ba14deaa80ea6e9f2&"
              alt="Reminder icon"
              className="shrink-0 w-11 aspect-[0.86]"
            />
            <div className="my-auto">Pengisian presensi mata kuliah</div>
          </div>
          {/* @ts-ignore */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="mataKuliah"
                render={({ field }) => (
                  <FormItem className="w-full flex-auto space-y-0">
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Mata Kuliah" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[250px]">
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
                    <FormMessage className="inline-block my-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pertemuan"
                render={({ field }) => (
                  <FormItem className="w-full flex-auto space-y-0">
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pertemuan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[250px]">
                        <SelectItem value="Pertemuan 1">Pertemuan 1</SelectItem>
                        <SelectItem value="Pertemuan 2">Pertemuan 2</SelectItem>
                        <SelectItem value="Pertemuan 3">Pertemuan 3</SelectItem>
                        <SelectItem value="Pertemuan 4">Pertemuan 4</SelectItem>
                        <SelectItem value="Pertemuan 5">Pertemuan 5</SelectItem>
                        <SelectItem value="Pertemuan 6">Pertemuan 6</SelectItem>
                        <SelectItem value="Pertemuan 7">Pertemuan 7</SelectItem>
                        <SelectItem value="Pertemuan 8 (UTS)">Pertemuan 8 (UTS)</SelectItem>
                        <SelectItem value="Pertemuan 9">Pertemuan 9</SelectItem>
                        <SelectItem value="Pertemuan 10">Pertemuan 10</SelectItem>
                        <SelectItem value="Pertemuan 11">Pertemuan 11</SelectItem>
                        <SelectItem value="Pertemuan 12">Pertemuan 12</SelectItem>
                        <SelectItem value="Pertemuan 13">Pertemuan 13</SelectItem>
                        <SelectItem value="Pertemuan 14">Pertemuan 14</SelectItem>
                        <SelectItem value="Pertemuan 15">Pertemuan 15</SelectItem>
                        <SelectItem value="Pertemuan 16 (UAS)">Pertemuan 16 (UAS)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="inline-block my-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="materiKuliah"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <Input
                        className="block w-full p-2.5 border border-input text-gray-500 text-sm rounded-lg shadow-none"
                        placeholder="Materi Perkuliahan"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="metodePertemuan"
                render={({ field }) => (
                  <FormItem className="w-full flex-auto space-y-0">
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Metode Pertemuan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[250px]">
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="offline">Offline</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="inline-block my-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-lg aspect-video bg-muted">
                        {!field.value ? (
                          // eslint-disable-next-line jsx-a11y/label-has-associated-control
                          <label className="w-full h-full flex flex-col justify-center items-center gap-1 text-gray-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                              <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>Upload bukti perkuliahan</p>
                            <input
                              accept="image/*"
                              type="file"
                              className="hidden"
                              name="image"
                              onChange={(event) => {
                                if (event.target.files) {
                                  field.onChange(event.target.files[0]);
                                  form.trigger('image');
                                }
                              }}
                              disabled={isPending}
                            />
                          </label>
                        ) : (
                          <div className="relative w-full aspect-video border rounded-xl overflow-hidden">
                            <Image
                              src={URL.createObjectURL(field.value)}
                              alt="uploaded-pic"
                              fill={true}
                              className="object-contain"
                            />
                            <button
                              type="button"
                              className="absolute bottom-3 right-3 bg-white text-gray-700 p-2 rounded-full border aspect-square"
                              onClick={() => field.onChange(undefined)}
                            >
                              <Trash className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage className="text-[10px] sm:text-xs" />
                  </FormItem>
                )}
              />
              <FormError message={error} className="bg-red-500/10" />
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2 text-white bg-green-600 rounded-md shadow-sm text-sm"
                  disabled={isPending}
                >
                  {isPending && (
                    <LoaderCircle className="w-4 h-4 animate-spin" />
                  )}
                  Kirim
                </button>
              </div>
            </form>
          </Form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Presensi