"use server";

import prisma from "@/lib/db";
import { AddProductSchema } from "@/schemas";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";

export const addProduct = async (formData: FormData) => {
  const name = formData.get("name");
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const image = formData.get("image");

  // Manual type checking
  if (
    typeof name !== "string" ||
    isNaN(price) ||
    isNaN(stock) ||
    !(image instanceof File)
  ) {
    return { error: "Invalid form data" };
  }

  const validated = AddProductSchema.safeParse({
    name,
    description: formData.get("description"), // Assuming description is also in the form data
    price,
    stock,
    image,
  });

  if (!validated.success) {
    return { error: validated.error.format() };
  }

  const { data } = validated;

  try {
    const buffer = Buffer.from(await data.image.arrayBuffer());
    const filename = data.image.name.replaceAll(" ", "_");
    console.log(filename);

    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer
    );

    // TODO: upload image buffer to storage and save URL to DB

    await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        image: filename,
      },
    });

    revalidatePath("/admin/products");
    revalidatePath("/products");
    // return { success: "Product added successfully!" };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};
