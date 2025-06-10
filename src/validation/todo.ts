import { z } from "zod"

export const addTodoValidation = z.object({
    title: z
        .string({ message: "Judul wajib diisi" })
        .min(1, { message: "Judul tidak boleh kosong" }),
    category: z.enum(["Pribadi", "Belajar", "Pekerjaan", "Kesehatan"], { message: "Kategori wajib diisi" }),
    priority: z.enum(["Rendah", "Sedang", "Tinggi", "Urgent"], { message: "Prioritas wajib dipilih" }),
    description: z
        .string({ message: "Deskripsi wajib diisi" })
        .min(1, { message: "Deskripsi tidak boleh kosong" }),
    deadline: z
        .number({ message: "Batas waktu wajib diisi" })
        .nonnegative({ message: "Batas waktu tidak boleh negatif" }),
    created_at: z
        .number({ message: "Tanggal dibuat wajib diisi" }),
    updated_at: z
        .number({ message: "Tanggal diperbarui wajib diisi" })
})

