<script setup lang="ts">

import {todoItemState} from "@states/todoitem.ts";
import {ref} from "vue";

const isSubmit = ref<boolean>(false);

const onSubmit = (_: Event) => {
  isSubmit.value = true;
  console.log(todoItemState.deadline);
  setTimeout(() => {
    isSubmit.value = false;
  }, 3000);
}
</script>

<template>
  <!-- Add Task Form -->
  <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8 animate-fade-in">
    <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      Tambah Tugas Baru
    </h2>
    <form class="space-y-4" @submit.prevent="onSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Judul Tugas</label>
          <input type="text" placeholder="Masukkan judul tugas..."
                 name="title"
                 v-model="todoItemState.title"
                 class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
          <select v-model="todoItemState.category" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
            <option value="Pribadi">Pribadi</option>
            <option value="Pekerjaan">Pekerjaan</option>
            <option value="Belajar">Belajar</option>
            <option value="Kesehatan">Kesehatan</option>
          </select>
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
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
          <input type="date"
                 @change="(e :  Event) => {
                   const { value } = e.target as HTMLInputElement;
                   const date = new Date(value);
                   todoItemState.deadline = date.getTime()
                 }"
                 class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
        <textarea placeholder="Deskripsi tugas (opsional)..." rows="3"
                  v-model="todoItemState.description"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"></textarea>
      </div>
      <button type="submit"
              class="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
        Tambah Tugas
      </button>
    </form>
  </div>

</template>

<style scoped>

</style>