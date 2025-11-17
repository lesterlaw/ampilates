import { redirect } from "next/navigation";
import { getCurrentAdmin, logout } from "@/app/actions/auth";
import { getAllPromotions, deletePromotion } from "@/app/actions/promotions-admin";
import PromotionsManager from "@/app/components/PromotionsManager";

export default async function AdminPromotionsPage() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const result = await getAllPromotions();
  const promotions = result.promotions || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-[#232323]">Promotions CMS</h1>
              <p className="text-sm text-[#656565]">Manage your promotions</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#656565]">Logged in as: {admin.email}</span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PromotionsManager initialPromotions={promotions} />
      </div>
    </div>
  );
}

