import "server-only";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export type Project = typeof projects.$inferSelect;

export type Stats = { total: number; newest: number; oldest: number };

export async function readProjects() {
    return db.select().from(projects).orderBy(desc(projects.year));
}

export async function readProject(slug: string) {
    const [project] = await db.select().from(projects).where(eq(projects.slug, slug));
    return project ?? null;
}

export async function readStats(): Promise<Stats> {
    const all = await db.select().from(projects);
    const years = all.map((p) => p.year);
    return {
        total: all.length,
        newest: years.length ? Math.max(...years) : 0,
        oldest: years.length ? Math.min(...years) : 0,
    };
}