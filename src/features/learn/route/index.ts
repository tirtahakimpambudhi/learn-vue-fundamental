import App from '@learn/pages/App.vue';
import type {RouteRecordRaw} from 'vue-router';
import Composition from '@learn/pages/Composition.vue';
import Form from '@learn/pages/Form.vue';
import TypesData from '@learn/pages/TypesData.vue';

const route :RouteRecordRaw[] = [
    {
        path: '/learn',
        component: App,
        name: 'LearnHome'
    }, 
    {
        path: '/learn/state',
        component: Composition,
        name: 'LearnState'
    }, 
    {
        path: '/learn/form',
        component: Form,
        name: 'LearnForm'
    },
    {
        path: '/learn/type',
        component: TypesData,
        name: 'LearnTypeData'
    }
];


export default route;