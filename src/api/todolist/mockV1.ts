import type {TodoItem} from "@/types/state";


const TODO_LIST_STORAGE :string = "todolist";

export const getAll = async () : Promise<TodoItem[]> => {
    return new Promise(resolve => {
        const todolist = JSON.parse(localStorage.getItem(TODO_LIST_STORAGE) || `[]`) as TodoItem[]
        resolve(todolist)
    })
}

export const getById = async (id: string): Promise<TodoItem> => {
    const todolist = await getAll();
    const todoItem = todolist.find((item) => item.id === id);

    if (!todoItem) {
        throw new Error(`Tidak dapat menemukan todo dengan id ${id}`);
    }

    return todoItem;
};


export const create = async (todoItem : TodoItem) :Promise<void> => {
    const todolist = await getAll()
    todolist.push(todoItem)
    localStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(todolist))
}


export const update = async (id: string, todoItem: TodoItem): Promise<void> => {
    const todolist = await getAll();
    const index = todolist.findIndex((item) => item.id === id);

    if (index === -1) {
        throw new Error(`Tidak dapat menemukan todo dengan id ${id}`);
    }
    const oldItem = todolist[index];

    todolist[index] = {
        ...todoItem,
        id: oldItem.id,
        created_at: oldItem.created_at,
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
