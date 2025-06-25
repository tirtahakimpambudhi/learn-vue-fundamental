<script setup lang="ts">
import { ref } from 'vue'
import type { Category } from '@todolist/types/Category'

const emits = defineEmits<{
  (e: 'filterByCategory', value: Category | null | 'Selesai'): void;
  (e: 'filterSearch', value: string): void;
}>()

const activeCategory = ref<Category | null | 'Selesai'>(null)

const categories: (Category | 'Selesai')[] = ['Pribadi', 'Pekerjaan', 'Belajar', 'Selesai']

const handleFilterClick = (category: Category | null | 'Selesai') => {
  activeCategory.value = category
  emits('filterByCategory', category)
}

const handleSearch = (e: Event) => {
  const { value } = e.target as HTMLInputElement;
  emits('filterSearch', value);
}

const isActive = (category: Category | null | 'Selesai') => {
  return activeCategory.value === category
}
</script>

<template>
  <!-- Filter & Search -->
  <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8 animate-fade-in">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      
      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-2">
        <!-- Semua -->
        <button
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            isActive(null)
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
          @click="handleFilterClick(null)"
        >
          Semua
        </button>

        <!-- Kategori Lainnya -->
        <button
          v-for="category in categories"
          :key="category"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            isActive(category)
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
          @click="handleFilterClick(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Search Box -->
      <div class="flex items-center space-x-2">
        <div class="relative">
          <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Cari tugas..."
            @keydown="(e) => {handleSearch(e)}"
            class="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>