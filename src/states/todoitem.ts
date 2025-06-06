import {reactive, type Reactive} from "vue";
import type {TodoItem} from "@/types/state.ts";

export const todoItemState : Reactive<TodoItem> = reactive<TodoItem>({
    title: '',
    category: 'Belajar',
    description: '',
    priority: 'Sedang',
    deadline: Date.now(),
    created_at: Date.now(),
    updated_at: Date.now(),
})