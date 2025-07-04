import {reactive, type Reactive} from 'vue';
import type { List } from '@todolist/types/List';
import * as api from '@todolist/api/mockV1';
import type { APIError } from '@todolist/types/APIError';
import type { Entity } from '@todolist/types/Entity';
import type { Category } from '@todolist/types/Category';
import useToggle from '@states/useToggle';

export default function useAPI() {
    const { state: isLoading, setTrue: startLoading, setFalse: endLoading } = useToggle();

    const todolist :Reactive<List> = reactive<List>([]);

    const errors = reactive<APIError>({
        action: 'getAll' , // default,
        message: '',
        version: 1,
    })

    const loadTodolist = async () => {
        startLoading()
        try {
            const data = await api.getAll()
            const transformed = data.map(item => ({
                ...item,
                deadline: new Date(item.deadline),
                createdAt: new Date(item.createdAt),
                updatedAt: (item.updatedAt) ?new Date(item.updatedAt) :null
            }))
            todolist.splice(0, todolist.length, ...transformed)


        } catch (error :unknown) {
            if (error instanceof Error ) {
                errors.action = 'getAll';
                errors.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi'
            }
        } finally {
            endLoading()
        }
    }

    const getTodoById = async (id: string) :Promise<Entity | null> => {
        try {
            const data = await api.getById(id)
            return data as Entity
        } catch (error) {
            if (error instanceof Error ) {
                errors.action = 'getById';
                errors.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi'
            }
            return null
        }
    }

    const filterTodoByCategory = async (value: Category | null | 'Selesai') => {
        startLoading()
        try {
            let data;
            if (value === null) {
                data = await api.getAll(); 
            } else if (value === 'Selesai') {
                data = await api.filterByCompleted();
            } else {
                data = await api.filterByCategory(value);
            }

            const transformed = data.map(item => ({
            ...item,
            deadline: new Date(item.deadline),
            }));

            todolist.splice(0, todolist.length, ...transformed);
        } catch (error: unknown) {
            if (error instanceof Error) {
            errors.action = 'getAll';
            errors.message = error.message || 'Sesuatu ada yang salah, tolong coba lagi';
            }
        } finally {
            endLoading()
        }
    };

    const filterTodoBySearch = async (value: string) => {
        startLoading()
        try {
            let data;
            if (value === '') {
                data = await api.getAll(); 
            } else {
                data = await api.filterByTitleAndDescription(value)
            }

            const transformed = data.map(item => ({
            ...item,
            deadline: new Date(item.deadline),
            }));

            todolist.splice(0, todolist.length, ...transformed);
        } catch (error: unknown) {
            if (error instanceof Error) {
            errors.action = 'getAll';
            errors.message = error.message || 'Sesuatu ada yang salah, tolong coba lagi';
            }
        } finally {
            endLoading()
        }
    };


    const createTodolist = async (todoItem : Entity) : Promise<void> => {
        await api.create(todoItem)
        await loadTodolist()
    }

    const updateTodolist = async (id : string, todoItem : Entity) : Promise<void> => {
        try {
            await api.update(id, todoItem)
            await loadTodolist()
        } catch (error) {
            if (error instanceof Error ) {
                errors.action = 'update';
                errors.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi'
            }
        }
    }

    const deleteTodolist = async (id : string) : Promise<void> => {
        try {
            await api.destroy(id)
            await loadTodolist()
        } catch (error) {
            if (error instanceof Error ) {
                errors.action = 'destroy';
                errors.message = error?.message || 'Sesuatu ada yang salah tolong coba lagi';
            }
        }
    }
    // Event relate with using API and listen the emits from components 
    const onFilterCategoryTodolist = async (value :Category|null|'Selesai') => {
        await filterTodoByCategory(value)
    }

    const onFilterSearchTodolist = async (value : string) => {
        await filterTodoBySearch(value)
    }

    const onUpdateTodolist = async (item :Entity) => {
        await updateTodolist(item.id, item);
    }


    const onDeleteTodolist = async (item :Entity) => {
        await deleteTodolist(item.id);
    }


    return {
        isLoading,
        todolist,
        errors,
        loadTodolist,
        getTodoById,
        createTodolist,
        updateTodolist,
        deleteTodolist,
        filterTodoByCategory,
        filterTodoBySearch,
        
        onUpdateTodolist,
        onDeleteTodolist,
        onFilterCategoryTodolist,
        onFilterSearchTodolist
    }
}