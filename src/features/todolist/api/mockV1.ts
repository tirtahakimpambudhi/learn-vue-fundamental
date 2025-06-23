import type {Entity} from "@todolist/types/Entity";
import type { List } from "@todolist/types/List";
import type { Category } from "@todolist/types/Category";

const TODO_LIST_STORAGE :string = "todolist";

export const getAll = async () : Promise<List> => {
    return new Promise(resolve => {
        const todolist = JSON.parse(localStorage.getItem(TODO_LIST_STORAGE) || `[]`) as List
        resolve(todolist)
    })
}

export const filterByCategory = async (category :Category) : Promise<List> => {
    const todolist = await getAll();
    return todolist.filter((todo) => todo.category === category)
}

export const filterByCompleted = async () : Promise<List> => {
    const todolist = await getAll();
    return todolist.filter((todo) => todo.completed)
}

export const filterByTitleAndDescription = async (value : string) :Promise<List> => {
    const todolist = await getAll();
    return todolist.filter((todo) => todo.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || todo.description.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
}

export const getById = async (id: string): Promise<Entity> => {
    const todolist = await getAll();
    const todoItem = todolist.find((item) => item.id === id);

    if (!todoItem) {
        throw new Error(`Tidak dapat menemukan todo dengan id ${id}`);
    }

    return todoItem;
};


export const create = async (todoItem : Entity) :Promise<void> => {
    const todolist = await getAll()
    todolist.push(todoItem)
    localStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(todolist))
}


export const update = async (id: string, todoItem: Entity): Promise<void> => {
    const todolist = await getAll();
    const index = todolist.findIndex((item) => item.id === id);

    if (index === -1) {
        throw new Error(`Tidak dapat menemukan todo dengan id ${id}`);
    }
    const oldItem = todolist[index];

    todolist[index] = {
        ...todoItem,
        id: oldItem.id,
        createdAt: oldItem.createdAt,
    };

    localStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(todolist));
};

export const destroy = async (id: string): Promise<void> => {
    const todolist = await getAll();

    const index = todolist.findIndex((item) => item.id === id);

    if (index === -1) {
        throw new Error(`Tidak dapat menemukan todo dengan id ${id}`);
    }

    const updatedList = todolist.filter((item) => item.id !== id);
    localStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(updatedList));
};
