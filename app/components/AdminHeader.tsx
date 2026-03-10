import Link from "next/link";

import { logout } from "@/app/actions/auth";
import { cn } from "@/lib/utils";

interface AdminHeaderProps {
  adminEmail: string;
  title: string;
  description: string;
  currentSection: "promotions" | "team";
}

export default function AdminHeader({
  adminEmail,
  title,
  description,
  currentSection,
}: AdminHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div>
              <h1 className="text-2xl font-bold text-[#232323]">{title}</h1>
              <p className="text-sm text-[#656565]">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/admin/promotions"
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  currentSection === "promotions"
                    ? "bg-[#80978b] text-white"
                    : "bg-[#f3f4ef] text-[#232323] hover:bg-[#e4e8e2]"
                )}
              >
                Promotions
              </Link>
              <Link
                href="/admin/team"
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  currentSection === "team"
                    ? "bg-[#80978b] text-white"
                    : "bg-[#f3f4ef] text-[#232323] hover:bg-[#e4e8e2]"
                )}
              >
                Team
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="text-sm text-[#656565]">Logged in as: {adminEmail}</span>
            <form action={logout}>
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
