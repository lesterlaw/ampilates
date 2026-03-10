"use server";

import { revalidatePath } from "next/cache";

import { DEFAULT_TEAM_MEMBERS } from "@/app/data/team-members";
import { prisma } from "@/lib/prisma";

import { getCurrentAdmin } from "./auth";

type TeamMemberInput = {
  name: string;
  bio: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
};

type TeamMemberUpdateInput = Partial<TeamMemberInput>;

const revalidateTeamPaths = () => {
  revalidatePath("/about/team");
  revalidatePath("/team");
  revalidatePath("/admin/team");
};

export const createTeamMember = async (data: TeamMemberInput) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const teamMember = await prisma.teamMember.create({
      data,
    });

    revalidateTeamPaths();
    return { success: true, teamMember };
  } catch (error) {
    console.error("Create team member error:", error);
    return { error: "Failed to create team member" };
  }
};

export const updateTeamMember = async (
  id: string,
  data: TeamMemberUpdateInput
) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const teamMember = await prisma.teamMember.update({
      where: { id },
      data,
    });

    revalidateTeamPaths();
    return { success: true, teamMember };
  } catch (error) {
    console.error("Update team member error:", error);
    return { error: "Failed to update team member" };
  }
};

export const deleteTeamMember = async (id: string) => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    await prisma.teamMember.delete({
      where: { id },
    });

    revalidateTeamPaths();
    return { success: true };
  } catch (error) {
    console.error("Delete team member error:", error);
    return { error: "Failed to delete team member" };
  }
};

export const getAllTeamMembers = async () => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized", teamMembers: [] };
  }

  try {
    const teamMembers = await prisma.teamMember.findMany({
      orderBy: [
        { order: "asc" },
        { createdAt: "asc" },
      ],
    });

    return { success: true, teamMembers };
  } catch (error) {
    console.error("Get all team members error:", error);
    return { error: "Failed to fetch team members", teamMembers: [] };
  }
};

export const seedDefaultTeamMembers = async () => {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { error: "Unauthorized" };
  }

  try {
    const existingCount = await prisma.teamMember.count();

    if (existingCount > 0) {
      return { success: true, imported: 0 };
    }

    await prisma.teamMember.createMany({
      data: DEFAULT_TEAM_MEMBERS,
    });

    revalidateTeamPaths();
    return { success: true, imported: DEFAULT_TEAM_MEMBERS.length };
  } catch (error) {
    console.error("Seed team members error:", error);
    return { error: "Failed to import team members" };
  }
};
