"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { verifyAdmin } from "@/lib/dal";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { ProjectPostSchema, slugify } from "@/lib/definitions";

const BUCKET = "project-images";

export async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
    }

    export type ProjectFormState = {
    message?: string;
    title?: string;
    year?: string;
    summary?: string;
} | undefined;

export async function createProject(
    _prev: ProjectFormState,
    form: FormData
    ): Promise<ProjectFormState> {
    await verifyAdmin();

    const typed = {
        title: String(form.get("title") ?? ""),
        year: String(form.get("year") ?? ""),
        summary: String(form.get("summary") ?? ""),
    };

    const parsed = ProjectPostSchema.safeParse({
        ...typed,
        image: form.get("image"),
    });

    if (!parsed.success) {
        return { message: parsed.error.issues[0].message, ...typed };
    }

    const { title, year, summary, image } = parsed.data;
    const slug = slugify(title);
    const path = `${slug}-${Date.now()}.${image.type.split("/")[1]}`;

    const supabase = await createClient();

    const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(path, image, { contentType: image.type });

    if (uploadError) {
        return { message: "Could not upload the picture. Try again.", ...typed };
    }

    const imageUrl = supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;

    try {
        await db.insert(projects).values({ slug, title, year, summary, imageUrl });
    } catch (e) {
        await supabase.storage.from(BUCKET).remove([path]);
        return { message: "A project with that title already exists.", ...typed };
    }

    revalidatePath("/projects");
    redirect(`/projects/${slug}`);
}