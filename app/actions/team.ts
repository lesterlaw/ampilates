"use server";

import { prisma } from "@/lib/prisma";
import { DEFAULT_TEAM_MEMBERS } from "@/app/data/team-members";

export type TeamMember = {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const buildFallbackTeamMembers = (): TeamMember[] =>
  DEFAULT_TEAM_MEMBERS.map((member, index) => ({
    id: `default-team-member-${index}`,
    name: member.name,
    bio: member.bio,
    imageUrl: member.imageUrl,
    order: member.order,
    isActive: member.isActive,
    createdAt: new Date(0),
    updatedAt: new Date(0),
  }));

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    const teamMembers = await prisma.teamMember.findMany({
      where: {
        isActive: true,
      },
      orderBy: [
        { order: "asc" },
        { createdAt: "asc" },
      ],
    });

    if (teamMembers.length === 0) {
      return buildFallbackTeamMembers();
    }

    return teamMembers;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return buildFallbackTeamMembers();
  }
};
