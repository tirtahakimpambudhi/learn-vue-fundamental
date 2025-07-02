import { z } from "zod";

export function handleZodError(
    error: z.ZodError,
    errorState: Partial<Record<string, string>>
) {
    Object.keys(errorState).forEach((key) => {
        errorState[key] = undefined;
    });

    console.error(error)


    error.errors.forEach((err) => {
        const field = err.path[0];
        const message = err.message;
        if (typeof field === "string") {
            errorState[field] = message;
        }
    });
}
