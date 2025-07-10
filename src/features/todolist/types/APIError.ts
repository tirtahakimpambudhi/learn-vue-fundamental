import type { APIAction } from "@todolist/types/APIAction";

export type APIError = {
    action: APIAction;
    message: string;
    version: number;
}