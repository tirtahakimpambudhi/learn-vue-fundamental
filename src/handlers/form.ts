import { userState } from "@states/user";
import { isSubmitState} from "@states/isSubmit";
import {personState} from "@states/person";
import {isSubmitTodoState} from "@states/isSubmitTodo";
import {todoListState} from "@states/todoList";

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


export const addTodo : (_: Event) => void = () => {
    isSubmitTodoState.value = true;
    try {
        todoListState.push()
    } catch (error) {
        console.log(error);
    }
}