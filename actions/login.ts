'use server'

import { prisma } from '@/db';
import { loginSchema } from '@/schemas';
import z from 'zod'

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { NPM, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: { npm: NPM }
  });

  if (!existingUser || (password !== existingUser.password)) {
    return { error: "Email atau password tidak valid!" }
  }

  return { success: "Login berhasil!" };
}