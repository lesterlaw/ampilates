"use server";

import { DEFAULT_CLASS_OFFERINGS } from "@/app/data/class-offerings";
import { prisma } from "@/lib/prisma";

export type ClassOffering = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  difficulty: number | null;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const buildFallbackClassOfferings = (): ClassOffering[] =>
  DEFAULT_CLASS_OFFERINGS.map((offering, index) => ({
    id: `default-class-offering-${index}`,
    title: offering.title,
    description: offering.description,
    imageUrl: offering.imageUrl,
    imageAlt: offering.imageAlt,
    difficulty: offering.difficulty,
    order: offering.order,
    isActive: offering.isActive,
    createdAt: new Date(0),
    updatedAt: new Date(0),
  }));

export const getClassOfferings = async (): Promise<ClassOffering[]> => {
  try {
    const classOfferings = await prisma.classOffering.findMany({
      where: {
        isActive: true,
      },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    if (classOfferings.length === 0) {
      return buildFallbackClassOfferings();
    }

    return classOfferings;
  } catch (error) {
    console.error("Error fetching class offerings:", error);
    return buildFallbackClassOfferings();
  }
};
