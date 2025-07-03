<script setup lang="ts">
import Main from '@todolist/components/Main.vue';
import Form from '@todolist/components/Form.vue';
import { useFormStore } from '@todolist/stores/useFormStore';
import { useAPIStore } from '@todolist/stores/useAPIStore';
import Header from '@todolist/components/Header.vue';
import Footer from '@todolist/components/Footer.vue';
import Progress from '@todolist/components/Progress.vue';
import Filter from '@/features/todolist/components/Filter.vue';
import Content from '@todolist/components/Content.vue';
import { onMounted, watch } from 'vue';
import type { Category } from '@todolist/types/Category';
import type { Entity } from '@todolist/types/Entity';
import {ref} from 'vue'

const {errors: apiError, loadTodolist, todolist, isLoading, filterTodoByCategory, filterTodoBySearch, updateTodolist, deleteTodolist } = useAPIStore()
const { isSubmit,errors: validationError, form,onSubmit  } = useFormStore();

onMounted(() => {
  loadTodolist()
})

const totalTodolist = ref<number>(todolist.length);
const totalTodolistCompleted = ref<number>(0);

watch(todolist, () => {
  totalTodolist.value = todolist.length;
  totalTodolistCompleted.value = todolist.reduce((acc, todo) => acc + (todo.completed ? 1 : 0), 0);
}, {
  immediate: true
})

const onFilterCategory = async (value :Category|null|'Selesai') => {
  await filterTodoByCategory(value)
}

const onFilterSearch = async (value : string) => {
  await filterTodoBySearch(value)
}

const onUpdate = async (item :Entity) => {
  await updateTodolist(item.id, item);
}


const onDelete = async (item :Entity) => {
  await deleteTodolist(item.id);
}

const onUpdateForm = async (item :Entity) => {
  item.updatedAt = new Date()
  Object.assign(form, {
    ...item
  });
}


</script>

<template>
  <!-- Loading Bar -->
  <div v-if="isLoading" class="fixed top-0 left-0 w-full z-50">
    <div class="h-1 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 animate-pulse">
      <div class="h-full bg-gradient-to-r from-purple-500 to-blue-600 animate-loading-bar origin-left"></div>
    </div>
  </div>

  <template v-if="!isLoading">
    <div class="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <!-- Header -->
      <Header
        :total="totalTodolist"
        :total-completed="totalTodolistCompleted"
      />
      <!-- Main -->
      <Main>
        <template #form>
          <Form
            :is-submit="isSubmit"
            :api-error="apiError"
            :todo-model="{form}"
            :validation-error="validationError"
            @submit="onSubmit"
          />
        </template>

        <template #content>
          <Content
            :todolist="todolist"
            @delete="onDelete"
            @update="onUpdate"
            @update-form="onUpdateForm"
          />
        </template>

        <template #filter>
          <Filter @filter-by-category="onFilterCategory" @filter-search="onFilterSearch"/>
        </template>
        <template #progress>
          <Progress
            :total="totalTodolist"
            :total-completed="totalTodolistCompleted"
          />
        </template>
      </Main>

      <!-- Footer -->
      <Footer/>
    </div>
  </template>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes loading-bar {
  0% { transform: scaleX(0); }
  50% { transform: scaleX(0.7); }
  100% { transform: scaleX(1); }
}

.animate-loading-bar {
  animation: loading-bar 2s ease-in-out infinite;
}
</style>