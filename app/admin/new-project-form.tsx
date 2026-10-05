"use client";

import { useActionState } from "react";
import { createProject, type ProjectFormState } from "./actions";

const initialState: ProjectFormState = undefined;

export function NewProjectForm() {
    const [state, formAction, pending] = useActionState(createProject, initialState);

    return (
        <form action={formAction} className="space-y-4 rounded border border-gray-200 p-6">
        <div className="space-y-1">
            <label htmlFor="title" className="block text-sm text-gray-600">
            Title
            </label>
            <input
            id="title"
            name="title"
            type="text"
            defaultValue={state?.title ?? ""}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
        </div>
        <div className="space-y-1">
            <label htmlFor="year" className="block text-sm text-gray-600">
            Year
            </label>
            <input
            id="year"
            name="year"
            type="number"
            defaultValue={state?.year ?? ""}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
        </div>
        <div className="space-y-1">
            <label htmlFor="summary" className="block text-sm text-gray-600">
            Description
            </label>
            <textarea
            id="summary"
            name="summary"
            defaultValue={state?.summary ?? ""}
            required
            rows={4}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
        </div>
        <div className="space-y-1">
            <label htmlFor="image" className="block text-sm text-gray-600">
            Picture
            </label>
            <input
            id="image"
            name="image"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            required
            className="w-full text-sm"
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
            {pending ? "Posting..." : "Post project"}
        </button>
        </form>
    );
}