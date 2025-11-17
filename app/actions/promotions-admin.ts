"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "./auth";
import { revalidatePath } from "next/cache";

export const createPromotion = async (data: {
  title: string;
  description?: string;
  imageUrl: string;
  features: string[];
  order: number;
  isActive: boolean;
}) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const promotion = await prisma.promotion.create({
      data,
    });

    revalidatePath("/promotions");
    revalidatePath("/admin/promotions");
    return { success: true, promotion };
  } catch (error) {
    console.error("Create promotion error:", error);
    return { error: "Failed to create promotion" };
  }
};

export const updatePromotion = async (
  id: string,
  data: {
    title?: string;
    description?: string;
    imageUrl?: string;
    features?: string[];
    order?: number;
    isActive?: boolean;
  }
) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const promotion = await prisma.promotion.update({
      where: { id },
      data,
    });

    revalidatePath("/promotions");
    revalidatePath("/admin/promotions");
    return { success: true, promotion };
  } catch (error) {
    console.error("Update promotion error:", error);
    return { error: "Failed to update promotion" };
  }
};

export const deletePromotion = async (id: string) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    await prisma.promotion.delete({
      where: { id },
    });

    revalidatePath("/promotions");
    revalidatePath("/admin/promotions");
    return { success: true };
  } catch (error) {
    console.error("Delete promotion error:", error);
    return { error: "Failed to delete promotion" };
  }
};

export const getAllPromotions = async () => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized", promotions: [] };
  }

  try {
    const promotions = await prisma.promotion.findMany({
      orderBy: [
        { order: "asc" },
        { createdAt: "desc" },
      ],
    });

    return { success: true, promotions };
  } catch (error) {
    console.error("Get all promotions error:", error);
    return { error: "Failed to fetch promotions", promotions: [] };
  }
};

