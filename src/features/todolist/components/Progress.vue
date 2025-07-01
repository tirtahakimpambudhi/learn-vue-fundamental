<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  total: number
  totalCompleted: number
}>()

const progress = computed(() => {
  if (props.total === 0) return 0
  const raw = (props.totalCompleted / props.total) * 100
  return Math.min(100, Math.round(raw))
})

const progressWidth = computed(() => `width: ${progress.value}%`)
</script>



<template>
  <!-- Progress Section -->
  <div class="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-fade-in">
    <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
      Progress Harian
    </h2>
    <div class="mb-4">
      <div class="flex justify-between text-sm text-gray-600 mb-2">
        <span>Tugas Selesai Hari Ini</span>
        <span>{{ totalCompleted }} dari {{ total }} tugas ({{progress}}%)</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-3">
        <div class="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"  :style="progressWidth"></div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div class="text-center p-4 bg-purple-50 rounded-lg">
        <div class="text-2xl font-bold text-purple-600">{{progress}}%</div>
        <div class="text-sm text-gray-600">Completion Rate</div>
      </div>
      <div class="text-center p-4 bg-blue-50 rounded-lg">
        <div class="text-2xl font-bold text-blue-600">{{ total - totalCompleted }}</div>
        <div class="text-sm text-gray-600">Tugas Tersisa</div>
      </div>
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="text-2xl font-bold text-green-600">{{ totalCompleted }}</div>
        <div class="text-sm text-gray-600">Tugas Selesai</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>