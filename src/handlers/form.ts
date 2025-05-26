import { userState } from "@states/user";


export const addUser = (event : SubmitEvent) => {
    console.log(event);
    console.log(userState);
}