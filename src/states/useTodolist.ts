import {isLoadingTodo} from "@states/isLoadingTodo";
import {errorAPITodo} from "@states/errorAPI";
import {todoListState} from "@states/todoList";
import {getAll, create, update, getById, destroy} from "@/api/todolist/mockV1";
import type {TodoItem} from "@/types/state";

export default function useTodolist() {
    const loadTodolist = async () => {
        isLoadingTodo.value = true
        try {
            const data = await getAll()
            todoListState.splice(0, todoListState.length, ...data)
        } catch (error :unknown) {
            if (error instanceof Error ) {
                errorAPITodo.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi'
            }
        } finally {
            isLoadingTodo.value = false
        }
    }

    const getTodoById = async (id: string) :Promise<TodoItem | null> => {
        try {
            const data = await getById(id)
            return data as TodoItem
        } catch (error) {
            if (error instanceof Error ) {
                errorAPITodo.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi'
            }
            return null
        }
    }

    const createTodolist = async (todoItem : TodoItem) : Promise<void> => {
        await create(todoItem)
        await loadTodolist()
    }

    const updateTodolist = async (id : string, todoItem : TodoItem) : Promise<void> => {
        try {
            await update(id, todoItem)
            await loadTodolist()
        } catch (error) {
            if (error instanceof Error ) {
                errorAPITodo.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi'
            }
        }
    }

    const deleteTodolist = async (id : string) : Promise<void> => {
        try {
            await destroy(id)
            await loadTodolist()
        } catch (error) {
            if (error instanceof Error ) {
                errorAPITodo.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi'
            }
        }
    }

    return {
        loadTodolist,
        createTodolist,
        updateTodolist,
        getTodoById,
        deleteTodolist
    }
}
