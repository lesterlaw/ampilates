import { redirect } from "next/navigation";

import { getCurrentAdmin } from "@/app/actions/auth";
import { getAllClassOfferings } from "@/app/actions/classes-admin";
import AdminHeader from "@/app/components/AdminHeader";
import ClassesManager from "@/app/components/ClassesManager";

export default async function AdminClassesPage() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const result = await getAllClassOfferings();
  const classOfferings = result.classOfferings || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader
        adminEmail={admin.email}
        title="Classes CMS"
        description="Manage class display images and descriptions"
        currentSection="classes"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {result.error && classOfferings.length === 0 ? (
          <div className="mb-6 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded">
            {result.error}. Run the database migration to enable class management.
          </div>
        ) : null}
        <ClassesManager initialClassOfferings={classOfferings} />
      </div>
    </div>
  );
}
