import {z} from "zod";
import type { categoryEnum } from "@todolist/validation/schema";

export type Category = z.infer<typeof categoryEnum>;