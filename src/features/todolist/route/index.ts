import type { RouteRecordRaw } from "vue-router";
import App from "@todolist/pages/App.vue";

const route : RouteRecordRaw[] = [
    {
        path: '/todolist',
        component: App,
        name: 'Todolist'
    }
];

export default route;