"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { LoginState } from "@/lib/definitions";

export async function signIn(_prev: LoginState, form: FormData): Promise<LoginState> {
    const email = String(form.get("email"));
    const password = String(form.get("password"));

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        return { message: "Wrong email or password.", email };
    }

    redirect("/admin");
}