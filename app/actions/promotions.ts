"use server";

import { prisma } from "@/lib/prisma";

export type Promotion = {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  features: string[];
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const getPromotions = async (): Promise<Promotion[]> => {
  try {
    const promotions = await prisma.promotion.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        order: "asc",
      },
    });

    return promotions;
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return [];
  }
};

