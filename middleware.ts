import { type NextRequest } from "next/server";

import { createMiddlewareClient } from "@/lib/supabase-middleware";

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = createMiddlewareClient(request);

  await supabase.auth.getUser();

  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*", "/api/upload"],
};
