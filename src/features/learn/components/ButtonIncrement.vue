<script setup lang="ts">

const props = defineProps<{ count: number }>()
const emit = defineEmits<{
  (e: 'increment'): void;
}>()

</script>

<template>
  <h1>Count Value Is: {{props.count}}</h1>
  <button @click="emit('increment')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click Me!
  </button>
</template>

<style scoped>

</style>