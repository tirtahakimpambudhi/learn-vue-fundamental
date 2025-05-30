import type {Reactive} from "vue";
import type {TodoError} from "@/types/state";
import {reactive} from "vue";


export const todoErrorState :Reactive<TodoError> = reactive<TodoError>({
});