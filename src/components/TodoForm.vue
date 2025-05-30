<script setup lang="ts">

import {todoItemState} from "@states/todoitem";
import {addTodo} from "@handlers/form";
import {isSubmitTodoState} from "../states/isSubmitTodo.ts";
import {computed} from "vue";
import {todoErrorState} from "@states/todoError.ts";
import {errorAPITodo} from "@states/errorAPI.ts";

const deadlineDate = computed(() => {
  if (!todoItemState.deadline) return ''; // fallback
  const date = new Date(todoItemState.deadline);
  return date.toISOString().split('T')[0]; // "YYYY-MM-DD"
});

const apiErrorMessage = errorAPITodo.message !== '' ? computed(() => `Error ketika memanggil API ${errorAPITodo.types} aksi ${errorAPITodo.action} dengan pesan ${errorAPITodo.message}`) :null;
const titleError = computed(() => todoErrorState.title);
const categoryError = computed(() => todoErrorState.category);
const priorityError = computed(() => todoErrorState.priority);
const deadlineError = computed(() => todoErrorState.deadline);
const descriptionError = computed(() => todoErrorState.description);


</script>

<template>
  <!-- Add Task Form -->
  <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8 animate-fade-in">
    <p v-if="apiErrorMessage"
       class="text-sm text-red-600 mb-4 p-3 bg-red-50 border border-red-300 rounded">
      {{ apiErrorMessage }}
    </p>
    <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      Tambah Tugas Baru
    </h2>
    <form class="space-y-4" @submit.prevent="(e) => {addTodo(e)}">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Judul Tugas</label>
          <input type="text" placeholder="Masukkan judul tugas..."
                 name="title"
                 v-model="todoItemState.title"
                 class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
          <p v-if="titleError" class="text-sm text-red-600 mt-1">{{ titleError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
          <select v-model="todoItemState.category" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
            <option value="Pribadi">Pribadi</option>
            <option value="Pekerjaan">Pekerjaan</option>
            <option value="Belajar">Belajar</option>
            <option value="Kesehatan">Kesehatan</option>
          </select>
          <p v-if="categoryError" class="text-sm text-red-600 mt-1">{{ categoryError }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Prioritas</label>
          <select v-model="todoItemState.priority" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
            <option value="Rendah">Rendah</option>
            <option value="Sedang">Sedang</option>
            <option value="Tinggi">Tinggi</option>
            <option value="Urgent">Urgent</option>
          </select>
          <p v-if="priorityError" class="text-sm text-red-600 mt-1">{{ priorityError }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
          <input
              type="date"
              :value="deadlineDate"
              @change="(e: Event) => {
                const { value } = e.target as HTMLInputElement;
                const date = new Date(value);
                todoItemState.deadline = date.getTime();
              }"
              class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />

          <p v-if="deadlineError" class="text-sm text-red-600 mt-1">{{ deadlineError }}</p>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
        <textarea placeholder="Deskripsi tugas (opsional)..." rows="3"
                  v-model="todoItemState.description"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"></textarea>
        <p v-if="descriptionError" class="text-sm text-red-600 mt-1">{{ descriptionError }}</p>
      </div>
      <button type="submit"
              class="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
        {{ isSubmitTodoState ? "Menambah Tugas..." : "Tambah Tugas" }}
      </button>
    </form>
  </div>

</template>

<style scoped>

</style>