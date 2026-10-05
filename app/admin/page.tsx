import { verifyAdmin } from "@/lib/dal";
import { signOut } from "./actions";
import { NewProjectForm } from "./new-project-form";

export default async function AdminPage() {
    const admin = await verifyAdmin();

    return (
        <main className="mx-auto max-w-xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
            <h1 className="text-lg font-semibold">New project post</h1>
            <form action={signOut} className="flex items-center gap-3 text-sm text-gray-600">
            <span>{admin.email}</span>
            <button type="submit" className="underline hover:text-black">
                Sign out
            </button>
            </form>
        </div>
        <NewProjectForm />
        </main>
    );
}