"use server";

import prisma from "@/lib/db";

export const getAllOrders = async () => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true, // Get user info (e.g. name, email)
        orderItems: {
          include: {
            product: true, // Get product details per item
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return orders;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
};
