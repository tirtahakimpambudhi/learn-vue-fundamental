import {type Reactive, reactive} from "vue";
import type {APIError} from "@/types/state";
import type {TodoAction} from "@/types/alias";



export const errorAPITodo :Reactive<APIError<TodoAction>> = reactive<APIError<TodoAction>>({
    types: 'todo',
    action: 'getAll',
    version: 1,
    message: '',
})