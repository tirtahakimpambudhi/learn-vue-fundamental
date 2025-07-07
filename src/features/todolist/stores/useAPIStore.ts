import { defineStore } from "pinia";
import useAPI from "@todolist/states/useAPI";


export const useAPIStore = defineStore('api', () => {
    return useAPI();
})