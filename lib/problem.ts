export function problemFor(e: unknown){
    const m = e instanceof Error ? e.message : "";
    if(m === "timeout") return "The server took too long.";
    if(m === "offline") return "The server did not answer. Check it is running.";
    if(m === "404") return "That is not there anymore.";
    return "Something went wrong.";
}