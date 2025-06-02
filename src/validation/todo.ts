import { z } from "zod/v4"
import type {TodoItem} from "@/types/state";


export const addTodoValidation = z.object<TodoItem>({
    title: z.string().
})

