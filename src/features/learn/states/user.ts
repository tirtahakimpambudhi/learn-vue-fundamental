import { type user } from '@learn/types/state';
import {type Reactive, reactive} from 'vue';

export const userState :Reactive<user> = reactive<user>({
    name: '',
    email: '',
    gender: 'male'
});

