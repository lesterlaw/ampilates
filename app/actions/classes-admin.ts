"use server";

import { revalidatePath } from "next/cache";

import { DEFAULT_CLASS_OFFERINGS } from "@/app/data/class-offerings";
import { prisma } from "@/lib/prisma";

import { getCurrentAdmin } from "./auth";

type ClassOfferingInput = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  difficulty: number | null;
  order: number;
  isActive: boolean;
};

type ClassOfferingUpdateInput = Partial<ClassOfferingInput>;

const revalidateClassPaths = () => {
  revalidatePath("/");
  revalidatePath("/classes");
  revalidatePath("/about");
  revalidatePath("/video");
  revalidatePath("/admin/classes");
};

export const createClassOffering = async (data: ClassOfferingInput) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const classOffering = await prisma.classOffering.create({
      data,
    });

    revalidateClassPaths();
    return { success: true, classOffering };
  } catch (error) {
    console.error("Create class offering error:", error);
    return { error: "Failed to create class offering" };
  }
};

export const updateClassOffering = async (
  id: string,
  data: ClassOfferingUpdateInput
) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const classOffering = await prisma.classOffering.update({
      where: { id },
      data,
    });

    revalidateClassPaths();
    return { success: true, classOffering };
  } catch (error) {
    console.error("Update class offering error:", error);
    return { error: "Failed to update class offering" };
  }
};

export const deleteClassOffering = async (id: string) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    await prisma.classOffering.delete({
      where: { id },
    });

    revalidateClassPaths();
    return { success: true };
  } catch (error) {
    console.error("Delete class offering error:", error);
    return { error: "Failed to delete class offering" };
  }
};

export const getAllClassOfferings = async () => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized", classOfferings: [] };
  }

  try {
    const classOfferings = await prisma.classOffering.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    return { success: true, classOfferings };
  } catch (error) {
    console.error("Get all class offerings error:", error);
    return { error: "Failed to fetch class offerings", classOfferings: [] };
  }
};

export const seedDefaultClassOfferings = async () => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const existingCount = await prisma.classOffering.count();

    if (existingCount > 0) {
      return { success: true, imported: 0 };
    }

    await prisma.classOffering.createMany({
      data: DEFAULT_CLASS_OFFERINGS,
    });

    revalidateClassPaths();
    return { success: true, imported: DEFAULT_CLASS_OFFERINGS.length };
  } catch (error) {
    console.error("Seed class offerings error:", error);
    return { error: "Failed to import class offerings" };
  }
};
