<script setup lang="ts">

import type {Entity} from "@todolist/types/Entity";
import { computed,reactive,watch } from "vue";

const props = defineProps<{
  item: Entity
}>();

const emits = defineEmits<{
  (e: 'update', item :Entity): void;
  (e: 'updateForm', item :Entity): void;
  (e: 'delete', item :Entity): void;
}>()

const optionsDate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
} as Intl.DateTimeFormatOptions;

const title = computed(() => props.item.title)
const description = computed(() => props.item.description);
const category = computed(() => props.item.category);
const priority = computed(() => props.item.priority);
const completed = computed(() => props.item.completed);
const createdAt = computed(() => props.item.deadline.toLocaleDateString("id-ID", optionsDate));



const daysLeft = computed(() => {
  const now = new Date();
  const deadlineDate = new Date(props.item.deadline);
  const timeDiff = deadlineDate.getTime() - now.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
});

const categoryClass = computed(() => {
  switch (category.value.toLowerCase()) {
    case "pekerjaan":
      return "bg-blue-100 text-blue-700";
    case "pribadi":
      return "bg-green-100 text-green-700";
    case "belajar":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
});

const priorityClass = computed(() => {
  switch (priority.value.toLowerCase()) {
    case "urgent":
      return "bg-red-100 text-red-700";
    case "tinggi":
      return "bg-orange-100 text-orange-700";
    case "sedang":
      return "bg-yellow-100 text-yellow-700";
    case "rendah":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
});

// Classes for completed state
const titleClass = computed(() => {
  return completed.value ? 'line-through text-gray-500' : 'text-gray-800';
});

const descriptionClass = computed(() => {
  return completed.value ? 'line-through text-gray-400' : 'text-gray-600';
});


const onCheck = (e: Event) => {
  const { checked } = e.target as HTMLInputElement
  props.item.completed = checked
  props.item.updatedAt = new Date()
  emits('update', props.item)
}

</script>

<template>
  <div 
    class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200 animate-slide-up"
    :class="{ 'opacity-75 bg-gray-50': completed }"
  >
    <div class="flex items-start justify-between">
      <div class="flex items-start space-x-4 flex-1">
        <input 
          type="checkbox" 
          :checked="completed"
          @change="onCheck"
          class="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
        >
        <div class="flex-1">
          <div class="flex items-center space-x-2 mb-2">
            <h3 class="text-lg font-semibold" :class="titleClass">{{ title }}</h3>
            <span
              class="px-2 py-1 text-xs font-medium rounded-full"
              :class="priorityClass"
            >
              {{ priority }}
            </span>
            <span
              class="px-2 py-1 text-xs font-medium rounded-full"
              :class="categoryClass"
            >
              {{ category }}
            </span>
          </div>
          <p class="mb-3" :class="descriptionClass">{{ description }}</p>
          
          <!-- Only show deadline info if not completed -->
          <div v-if="!completed" class="flex items-center text-sm text-gray-500 space-x-4">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {{ createdAt }}
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ daysLeft >= 0  ?`${daysLeft} hari lagi` :`Terlewat ${daysLeft * (-1)} hari` }}
            </div>
          </div>
          
          <!-- Show completion status if completed -->
          <div v-else class="flex items-center text-sm text-green-600 space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="font-medium">Selesai</span>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-2 ml-4">
        <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200" @click="emits('updateForm', item)">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </button>
        <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"  @click="emits('delete',item)">
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