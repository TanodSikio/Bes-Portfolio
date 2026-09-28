import { fetchStats } from "@/lib/api";

export async function ProjectStats(){
    const stats = await fetchStats();
    const items = [
        { label: "Projects", value: stats.total },
        { label: "Newest", value: stats.newest },
        { label: "Oldest", value: stats.oldest},
    ];

    return(
        <dl className="mt-6 flex gap-12">
            {items.map((s) => (
                <div key={s.label}>
                    <dt className="text-sm text-neutral-500">{s.label}</dt>
                    <dd className="text-2xl font-semibold">{s.value}</dd>
                </div>
            ))}
        </dl>
    );
}