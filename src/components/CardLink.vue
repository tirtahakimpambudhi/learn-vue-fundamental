
<script setup lang="ts">
import type { CardData } from '@/types/CardData';
import { RouterLink } from 'vue-router'

defineProps<{
  datas: CardData[]
}>()

</script>


<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Dashboard
        </h1>
        <p class="text-lg text-gray-600">
          Pilih menu yang ingin Anda akses
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <template v-if="datas" v-for="(data) in datas" :key="data.id" >
      <RouterLink 
          :to="data.route" 
          class="group block transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div :class="`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 group-hover:border-${data.color}-300`">
            <div :class="`bg-gradient-to-br from-${data.color}-500 to-${data.color}-600 p-8`">
              <div class="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-white mb-2">{{ data.title }}</h2>
              <p :class="`text-${data.color}-100`">
                {{ data.description }}
              </p>
            </div>
            <div class="p-6">
              <div :class="`flex items-center text-${data.color}-600 group-hover:text-${data.color}-800`">
                <span class="font-medium">Lihat Selengkap nya</span>
                <svg class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles jika diperlukan */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style>