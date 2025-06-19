import {reactive, type Reactive} from "vue";
import type {Person} from "@learn/types/state";


export const personState :Reactive<Person> = reactive<Person>({
    firstName: '',
    lastName: '',
});