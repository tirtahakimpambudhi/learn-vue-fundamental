import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia';
import App from '@pages/App.vue';
import todolistRoute from '@todolist/route/index';
import learnRoute from '@learn/route/index';
import { createWebHistory, createRouter } from 'vue-router';
import NotFound from '@/pages/NotFound.vue';
import Home from '@pages/Home.vue';

const pinia = createPinia();
const app = createApp(App);



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home ,
            name: 'Home'
        },
        ...todolistRoute,
        ...learnRoute,
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: 'NotFound'
        }
    ]
})


app.use(pinia)
app.use(router)
app.mount('#app');