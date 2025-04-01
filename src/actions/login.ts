"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getUserByEmial } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email, password } = validatedFields.data;

  const user = await getUserByEmial(email);

  console.log(user);

  if (!user) return { error: "User not found. LMAO" };

  // if (email !== user?.email || !bcrypt.compare(password, user?.password)) {
  //   return { error: "Invalid Credentials." };
  // }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }

  // return { success: "Email sent" };
};
