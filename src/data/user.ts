import prisma from "@/lib/db";

export const getUserByEmial = async (email: string) => {
  try {
    await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    await prisma.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    return null;
  }
};
