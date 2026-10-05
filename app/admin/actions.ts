import { verifyAdmin } from "@/lib/dal";

export async function createProject(prev, form){
    await verifyAdmin();
}