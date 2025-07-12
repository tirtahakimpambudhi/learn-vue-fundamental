import type { Category } from "@todolist/types/Category";
import type { Priority } from "@todolist/types/Priority";

export type Entity = {
 id: string;   
 title: string;
 category: Category;
 priority: Priority;   
 completed: boolean;
 deadline: Date;
 description: string;
 createdAt: Date;
 updatedAt: Date | null;
}