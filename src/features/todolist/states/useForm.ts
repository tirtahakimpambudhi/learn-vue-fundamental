import { reactive,ref } from "vue";
import type { Item } from "@todolist/types/Item";
import type { ZodError } from "@todolist/types/ZodError";
import { z } from "zod";
import { handleZodError } from "@todolist/handlers/error";
import { schema } from "@todolist/validation/schema";
import {v4 as uuidv4} from "uuid";
import { useAPIStore } from "@todolist/stores/useAPIStore";
import type { Entity } from "../types/Entity";
import useSubmit from "@/states/useSubmit";

export default function useForm() {

    const useAPI = useAPIStore();

    const form = reactive<Item>({
        id: '',
        title: '',
        category: 'Belajar',
        priority: 'Sedang',
        description: '',
        completed: false,
        deadline: new Date(),
        createdAt: new Date(),
        updatedAt: null,
    });

    const errors = reactive<ZodError>({});

    const { isSubmit, setSubmit } = useSubmit(false);

    const onSubmit = async (_: Event) => {
        setSubmit(true)
        try {
            // Validation the value form
            schema.parse(form)

            if (form.id) {
                useAPI.updateTodolist(form.id, {...form} as Entity)
            } else {
                // Set the form.id
                form.id = uuidv4()
                // Create the todo
                useAPI.createTodolist({
                    ...form
                } as Entity);
            }

            // Reset state todo form
            Object.assign(form, {
                id: '',
                title: '',
                category: 'Belajar',
                priority: 'Sedang',
                description: '',
                deadline: new Date(),
                createdAt: new Date(),
                updatedAt: null,
            } as Item)

            // Reset state errors form
            Object.assign(errors, {
                title: undefined,
                category: undefined,
                priority: undefined,
                deadline: undefined,
                description:undefined,
                createdAt: undefined,
                updatedAt: undefined
            } as ZodError)
            
        } catch (error :unknown) {
            if (error instanceof z.ZodError ) {
                handleZodError(error, errors );
            }
        } finally {
            setSubmit(false);
        }
    }
    
    const fillForm = async (item :Entity) => {
        item.updatedAt = new Date()
        Object.assign(form, {
            ...item
        });
    }
    return {
        form,
        isSubmit,
        onSubmit,
        errors,
        fillForm
    }
}