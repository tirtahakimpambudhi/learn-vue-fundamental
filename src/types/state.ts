export type Gender = 'female' | 'male';


export type user = {
    name: string;
    email: string;
    gender: Gender;
};

export type Person = {
    firstName: string;
    lastName: string;
}

export type TodoCategory = 'Pribadi' | 'Belajar' | 'Pekerjaan' | 'Kesehatan';

export type TodoPriority = 'Rendah' | 'Sedang' | 'Tinggi' | 'Urgent';

export type TodoItem = {
    title: string;
    category: TodoCategory;
    priority: TodoPriority;
    description: string;
    deadline: number;
    created_at: number;
    updated_at: number;
}

export type TodoError = {
    title?: string;
    category?: string;
    priority?: string;
    description?: string;
    deadline?: string;
}

// INTERFACE
// CANNOT PRIMITIVE TYPE
// CAN MERGE OR OVERRIDE
// Native Support Extends


