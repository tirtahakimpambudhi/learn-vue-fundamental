<script setup lang="ts">

</script>

<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200 animate-slide-up">
    <div class="flex items-start justify-between">
      <div class="flex items-start space-x-4 flex-1">
        <input type="checkbox" class="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
        <div class="flex-1">
          <div class="flex items-center space-x-2 mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Menyelesaikan laporan bulanan</h3>
            <span class="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Urgent</span>
            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Pekerjaan</span>
          </div>
          <p class="text-gray-600 mb-3">Membuat laporan kinerja tim untuk bulan ini dan presentasi untuk meeting dengan manager.</p>
          <div class="flex items-center text-sm text-gray-500 space-x-4">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              25 Mei 2025
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              2 hari lagi
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-2 ml-4">
        <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </button>
        <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>