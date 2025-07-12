import { defineStore } from "pinia";
import useAPI from "@codeinaja-users/states/useAPI";

export const useAPIStore = defineStore('users-api', () => {
    return useAPI();
}); 