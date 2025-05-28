<script setup lang="ts">

</script>

<template>
  <!-- Header -->
  <header class="bg-white shadow-lg border-b border-gray-100">
    <div class="max-w-4xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-800">Todo Manager</h1>
            <p class="text-sm text-gray-500">Kelola tugas Anda dengan efisien</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="text-right">
            <p class="text-sm text-gray-600">Total Tugas</p>
            <p class="text-xl font-bold text-purple-600" id="totalTasks">5</p>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-600">Selesai</p>
            <p class="text-xl font-bold text-green-600" id="completedTasks">2</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>