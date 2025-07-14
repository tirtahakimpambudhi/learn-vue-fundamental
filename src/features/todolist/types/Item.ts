import {z} from "zod";
import type { schema } from "@todolist/validation/schema";


export type Item = z.infer<typeof schema> & {
    id: string;
};
