import { type user } from '@/types/state';
import {reactive} from 'vue';

export const userState = reactive<user>({
    name: '',
    email: '',
    gender: 'male'
});