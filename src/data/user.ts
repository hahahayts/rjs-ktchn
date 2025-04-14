"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUserByEmial = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const deleteUserById = async (id: string) => {
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    revalidatePath("/admin/users");
  } catch (error) {
    console.error(error);
  }
};
