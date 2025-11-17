"use server";

import { createServerClient } from "@/lib/supabase-server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const login = async (email: string, password: string) => {
  try {
    const supabase = await createServerClient();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: error.message };
    }

    if (!data.session || !data.user) {
      return { error: "Failed to create session" };
    }

    // Check if user is an admin
    const admin = await prisma.admin.findUnique({
      where: { email: data.user.email || "" },
    });

    if (!admin || !admin.isActive) {
      await supabase.auth.signOut();
      return { error: "Unauthorized: Admin access required" };
    }

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "An error occurred during login" };
  }
};

export const logout = async () => {
  const supabase = await createServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
};

export const getCurrentAdmin = async () => {
  try {
    const supabase = await createServerClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    const admin = await prisma.admin.findUnique({
      where: { email: user.email || "" },
    });

    if (!admin || !admin.isActive) {
      return null;
    }

    return admin;
  } catch (error) {
    console.error("Get current admin error:", error);
    return null;
  }
};

