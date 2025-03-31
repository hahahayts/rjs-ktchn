"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getUserByEmial } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email, password } = validatedFields.data;

  const user = await getUserByEmial(email);

  if (!user) return { error: "User not found." };

  if (email !== user?.email || !bcrypt.compare(password, user?.password)) {
    return { error: "Invalid Credentials." };
  }

  return { success: "Email sent" };
};
