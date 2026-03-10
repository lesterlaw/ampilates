import { redirect } from "next/navigation";

import { getCurrentAdmin } from "@/app/actions/auth";
import { getAllTeamMembers } from "@/app/actions/team-admin";
import AdminHeader from "@/app/components/AdminHeader";
import TeamMembersManager from "@/app/components/TeamMembersManager";

export default async function AdminTeamPage() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const result = await getAllTeamMembers();
  const teamMembers = result.teamMembers || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader
        adminEmail={admin.email}
        title="Team CMS"
        description="Manage your team profiles and instructor images"
        currentSection="team"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TeamMembersManager initialTeamMembers={teamMembers} />
      </div>
    </div>
  );
}
