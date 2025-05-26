<script setup lang="ts">
import { onBeforeMount, computed } from 'vue';
import { userState } from '@states/user';
import { type Gender } from '@/types/state';

const props = defineProps<{
  label: string
  typeInput: string
}>()

const key = props.label.toLowerCase()

onBeforeMount(() => {
  if (!(key in userState)) {
    throw new Error(`Property '${key}' not found in userState.`)
  }
})

const modelValue = computed({
  get: () : string | Gender => userState[key],
  set: (val) => {
    userState[key] = val
  }
})
</script>

<template>
  <div>
    <label :for="key" class="block text-sm/6 font-medium text-gray-900">
      {{ props.label }}
    </label>
    <div class="mt-2">
      <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        <input
          :type="props.typeInput"
          :name="key"
          :id="key"
          v-model="modelValue"
          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        />
      </div>
    </div>
  </div>
</template>



<style scoped>
</style>