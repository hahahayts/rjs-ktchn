"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();

    return products;
  } catch (error) {
    return null;
  }
};

export const getProductById = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  } catch (error) {
    return null;
  }
};

export const deleteProductById = async (id: string) => {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/products");
    revalidatePath("  /products");
  } catch (error) {
    console.error(error);
  }
};
