import type {RouteRecordRaw} from "vue-router";
import App from "@codeinaja-users/pages/App.vue";
import Home from "@codeinaja-users/pages/Home.vue";


const route : RouteRecordRaw[] = [
    {
        name: 'users',
        path: '/codeinaja',
        component: App,
        children: [
            {
                name: 'users.home',
                path: 'users',
                component: Home,
            }
        ]
    },
    {
        name: 'users.about',
        path: '/about',
        component: App
    },

    {
        name: 'users.contact',
        path: '/contact',
        component: App
    },

    {
        name: 'users.courses',
        path: '/courses',
        component: App
    },
    {
        name: 'users.register',
        path: '/register',
        component: App
    },
    {
        name: 'users.login',
        path: '/login',
        component: App
    },

    {
        name: 'users.dashboard',
        path: '/dashboard',
        component: App
    }
];
console.log(route);
export default route;