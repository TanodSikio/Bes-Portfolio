import { cookies } from "next/headers";

export async function createClient(){
    const cookieStore = await cookies();
    return createServerClient(URL, PUBLISHABLE_KEY, {
        cookies: {
            getAll() { return cookieStore.getAll(); },
            setAll(list) { try { list.forEach((c) => cookieStore.set(c.name, c.value, c.options)); } catch {} },
        },
    });
}