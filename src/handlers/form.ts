import { userState } from "@states/user";
import { isSubmitState} from "@states/isSubmit";
import {personState} from "@states/person";
import {isSubmitTodoState} from "@states/isSubmitTodo";
import {z} from "zod";
import {handleZodError} from "@handlers/errors";
import useTodolist from "@states/useTodolist";
import {todoErrorState} from "@states/todoError";
import {addTodoValidation} from "@/validation/todo";
import {todoItemState} from "@states/todoitem";
import type {TodoItem} from "@/types/state";
import {v4 as uuidV4} from "uuid"

export const addUser: ( _: Event ) => void = (_) => {
    isSubmitState.value = true;
    console.log(JSON.stringify(userState, null, 2));
    // Simulate Call API
    setTimeout(() => {
        isSubmitState.value = false;
    }, 3000)
};


export const addPerson: ( _: Event ) => void = (_) => {
    isSubmitState.value = true;
    console.log(JSON.stringify(personState, null, 2));
    setTimeout(() => {
        isSubmitState.value = false;
    }, 3000)
}


export const addTodo = async (_ : Event) => {
    isSubmitTodoState.value = true;
    try {
        // Validation The form
        addTodoValidation.parse(todoItemState)
        todoItemState.id = uuidV4()
        // create the todo to api
        await useTodolist().createTodolist({...todoItemState})

        // Reset todo item
        Object.assign(todoItemState, {
            id: "",
            title: "",
            category: "Belajar",
            priority: "Sedang",
            description: "",
            deadline: Date.now(),
            created_at: Date.now(),
            updated_at: Date.now(),
        }  as TodoItem)

        Object.keys(todoErrorState).forEach((key) => {
            todoErrorState[key as keyof typeof todoErrorState] = undefined;
        });

    } catch (error) {
        if ( error instanceof z.ZodError ) {
            handleZodError(error, todoErrorState)
        }
        console.log(error instanceof z.ZodError, typeof error, error)
    } finally {
       isSubmitTodoState.value = false;
    }
}