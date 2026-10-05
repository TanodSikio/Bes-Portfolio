import { NextResponse } from "next/server";

const { data } = await supabase.auth.getClaims();

if(!data?.claims ?? request.nextUrl.pathname.startsWith("/admin")){
    return NextResponse.redirect(new URL("/login", request.url));
}