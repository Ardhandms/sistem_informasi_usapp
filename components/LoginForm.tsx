'use client'

import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import Image from "next/image"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/schemas"
import { useState, useTransition } from "react"
import { login } from "@/actions/login"
import { LoaderCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormError } from "@/components/FormError"
import { createUser } from "@/actions/user"

function Login() {
  const [loging, startLogin] = useTransition();
  const [error, setError] = useState('');
  const navigate = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      NPM: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    setError('');

    startLogin(async () => {
      login(values)
        .then((res) => {
          if (res.success) {
            navigate.push(`/beranda?id=${values.NPM}`);
          } else {
            setError(res?.error || '');
          }
        });
    });
  }
  return (
    <div className="bg-[#029A4D] h-screen flex justify-center items-center p-8 space-y-8 pt-16">
      <div className="w-full">
        <div className="relative w-[100px] aspect-square mx-auto mb-8">
          <Image
            src="/unsil.png"
            alt="logounsil"
            className="object-contain"
            fill={true}
          />
        </div>
        {/* @ts-ignore */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <h1 className="text-5xl font-bold">Hello,</h1>
            <p>Silahkan masuk untuk melanjutkan</p>
            <div className="space-y-2">
              <div className="rounded-md shadow-sm space-y-4">
                <FormField
                  control={form.control}
                  name="NPM"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="NPM" disabled={loging} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" placeholder="Password" disabled={loging} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormError message={error} />

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 p-3 rounded-full bg-blue-500"
                  disabled={loging}
                >
                  {loging && (
                    <LoaderCircle className="w-4 h-4 animate-spin" />
                  )}
                  Masuk
                </button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Login;
