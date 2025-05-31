import type {Reactive} from "vue";
import type {TodoItem} from "@/types/state";
import {reactive} from "vue";

export const todoListState :Reactive<TodoItem[]> = reactive<TodoItem[]>([])
