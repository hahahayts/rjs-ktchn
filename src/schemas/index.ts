import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .trim(),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Minimum 8 characters required",
  }),
});

// schemas.ts


export const AddProductSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  description: z.string().min(1, { message: "Description is required" }).trim(), // New field
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(1, { message: "Price is required" })
    .positive({ message: "Price must be a positive number" }),
  stock: z
    .number({ invalid_type_error: "Stock must be a number" })
    .min(1, { message: "Stock is required" })
    .positive({ message: "Stock must be a positive number" }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Image is required",
    })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "File must be an image",
    }),
});
