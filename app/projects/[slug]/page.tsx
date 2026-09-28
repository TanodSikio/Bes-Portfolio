import { notFound } from "next/navigation";
import { fetchProject } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export default async function Projectpage({ params }: Props){
    const { slug } = await params;
    let project;
    try{
        project = await fetchProject(slug);
    }catch(e){
        if(e instanceof Error && e.message === "404") notFound();
        throw e;
    }

    return(
        <main className="px-16 py-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-2 text-neutral-500">{project.year}</p>
            <p className="mt-6 text-xl">{project.summary}</p>
        </main>
    );
}