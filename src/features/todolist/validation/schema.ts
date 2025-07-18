import { z } from "zod";

export const categoryEnum = z.enum(['Pribadi', 'Belajar', 'Pekerjaan', 'Kesehatan'],  { message: "Kategori wajib diisi" });
export const priorityEnum = z.enum(['Rendah', 'Sedang', 'Tinggi', 'Urgent'],  { message: "Prioritas wajib dipilih" });


export const schema = z.object({
    title: z
        .string({ message: "Judul wajib diisi" })
        .min(1, { message: "Judul tidak boleh kosong" }),
    category: categoryEnum,
    priority: priorityEnum,
    description: z
        .string({ message: "Deskripsi wajib diisi" })
        .min(1, { message: "Deskripsi tidak boleh kosong" }),
    completed: z.boolean().optional().default(false),
    deadline: z
        .date({ message: "Batas waktu wajib diisi" }),
    createdAt: z.date().optional().default(new Date()),
    updatedAt: z.date().optional().nullable().default(new Date())
})