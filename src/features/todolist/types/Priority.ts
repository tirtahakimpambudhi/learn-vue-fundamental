import {z} from "zod";
import type { priorityEnum } from "@todolist/validation/schema";

export type Priority = z.infer<typeof priorityEnum>;