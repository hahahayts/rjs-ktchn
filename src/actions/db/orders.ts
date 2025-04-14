// /app/actions/createOrder.ts

"use server";

import prisma from "@/lib/db";

type CartItem = {
  productId: string; // Ensure the correct type (e.g., `string` for IDs)
  quantity: number;
  price: number;
};

export async function createOrder(
  userId: string,
  cartItems: CartItem[],
  total: number
) {
  if (!userId || !cartItems || cartItems.length === 0) {
    throw new Error("Invalid cart data");
  }

  try {
    // Create order and order items in one transaction to ensure consistency
    const order = await prisma.order.create({
      data: {
        userId,
        total,
        orderItems: {
          create: cartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    return order; // Return the created order object
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Error placing the order");
  }
}
