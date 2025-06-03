import {reactive, type Reactive} from "vue";
import type {Person} from "@/types/state";


export const personState :Reactive<Person> = reactive<Person>({
    firstName: '',
    lastName: '',
});