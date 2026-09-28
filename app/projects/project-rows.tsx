import { fetchProjects } from "@/lib/api";
import { ProjectSearch } from "./project-search";
import { Problem } from "./problem";
import { problemFor } from "@/lib/problem";

export async function ProjectRows(){
    let projects;
    try{
        projects = await fetchProjects();
    }catch(e){
        return <Problem message={problemFor(e)}/>;
    }
    
    if(projects.length === 0){
        return <Problem message="No project yet. Add the first one."/>;
    }
    return <ProjectSearch projects={projects}/>;
}   