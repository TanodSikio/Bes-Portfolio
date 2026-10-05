import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const verifyAdmin = cache(async () => {
    const { data } = await (await createClient()).auth.getClaims();
    if (data?.claims?.app_metadata?.role !== "admin") redirect("/login");
    return { email: data.claims.email as string };
});