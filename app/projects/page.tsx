import { Suspense } from "react";
import { RowsSkeleton, StateSkeleton } from "./skeletons";
import { ProjectStats } from "./project-stats";
import { ProjectRows } from "./project-rows";

export const dynamic = "force-dynamic";

export default function ProjectsPage() {
    return (
        <main className="px-16 py-8">
            <h1 className="text-4xl font-bold">Projects</h1>

            <Suspense fallback={<StateSkeleton />}>
                <ProjectStats />
            </Suspense>

            <Suspense fallback={<RowsSkeleton />}>
                <ProjectRows />
            </Suspense>
        </main>
    );
}