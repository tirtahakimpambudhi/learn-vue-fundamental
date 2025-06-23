<script setup lang="ts">

import {ref, computed, onMounted, onUnmounted} from "vue";

const props = defineProps<{ timeDiscount: Date }>();

const targetTime = ref<Date>(props.timeDiscount);
const now = ref<Date>(new Date());

let timer: ReturnType<typeof setInterval>

const countdown = computed(() => {
  const distance = targetTime.value.getTime() - now.value.getTime()

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  return { days, hours, minutes, seconds }
})

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

</script>

<template>
  <!-- Timer -->
  <div class="flex justify-center lg:justify-start gap-6 md:gap-10 mb-6">
    <div class="text-center">
      <p class="text-2xl md:text-3xl font-semibold text-gray-800">{{ countdown.days }}</p>
      <p class="text-sm text-gray-500">Hari</p>
    </div>
    <div class="text-center">
      <p class="text-2xl md:text-3xl font-semibold text-gray-800">{{ countdown.hours }}</p>
      <p class="text-sm text-gray-500">Jam</p>
    </div>
    <div class="text-center">
      <p class="text-2xl md:text-3xl font-semibold text-gray-800">{{ countdown.minutes }}</p>
      <p class="text-sm text-gray-500">Menit</p>
    </div>
    <div class="text-center">
      <p class="text-2xl md:text-3xl font-semibold text-gray-800">{{ countdown.seconds }}</p>
      <p class="text-sm text-gray-500">Detik</p>
    </div>
  </div>

</template>

<style scoped>

</style>