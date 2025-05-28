import { userState } from "@states/user";
import { isSubmitState} from "@states/isSubmit.ts";
import {personState} from "@states/person.ts";

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