import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
export default async function Projectpage({ params }: Props){
    const { slug } = await params;
    const project = await getProject(slug);
    if(!project) notFound();
    return(
        <main className="px-16 py-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-2 text-neutral-500">{project.year}</p>
            <p className="mt-6 text-xl">{project.summary}</p>
        </main>
    );
}