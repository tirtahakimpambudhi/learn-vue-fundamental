import { defineStore } from "pinia";
import useForm from "@todolist/states/useForm";


export const useFormStore = defineStore('formStore', () => {
    return useForm()
})