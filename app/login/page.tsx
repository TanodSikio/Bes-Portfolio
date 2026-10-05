"use client";

import { useActionState } from "react";
import { signIn } from "./actions";

export default function LoginPage() {
    const [state, formAction, pending] = useActionState(signIn, undefined);

    return (
        <main className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-sm rounded border border-gray-200 p-8">
            <h1 className="mb-6 text-lg font-semibold">Admin sign in</h1>
            <form action={formAction} className="space-y-4">
            <div className="space-y-1">
                <label htmlFor="email" className="block text-sm text-gray-600">
                Email
                </label>
                <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue={state?.email ?? ""}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="password" className="block text-sm text-gray-600">
                Password
                </label>
                <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                />
            </div>
            {state?.message && (
                <p role="alert" className="text-sm text-red-600">
                {state.message}
                </p>
            )}
            <button
                type="submit"
                disabled={pending}
                className="w-full rounded bg-black py-2 text-sm font-medium text-white disabled:opacity-50"
            >
                {pending ? "Signing in..." : "Sign in"}
            </button>
            </form>
        </div>
        </main>
    );
}