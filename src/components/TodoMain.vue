<script setup lang="ts">

import TodoForm from "@components/TodoForm.vue";
import TodoSearch from "@components/TodoSearch.vue";
import TodoItem from "@components/TodoItem.vue";
import TodoProgress from "@components/TodoProgress.vue";
import {onMounted, watch} from "vue";
import {todoListState} from "@states/todoList";

import useTodolist from "@states/useTodolist";

const { loadTodolist } = useTodolist();

onMounted(() => {
  loadTodolist();
});




</script>

<template>
  <!-- Main Content -->
  <main class="max-w-4xl mx-auto px-6 py-8">
  <!--  Add Form  -->
    <TodoForm>
    </TodoForm>
    <!-- Filter & Search -->
    <TodoSearch>

    </TodoSearch>

    <!-- Task List -->
    <div class="space-y-4">
      <!-- Task Item -->
      <template v-if="todoListState.length > 0">
        <TodoItem
            v-for="item in todoListState"
            :key="item.id"
            :todo="item"
        />
      </template>
      <template v-else>
        Tidak ada yang harus dikerjakan
      </template>
    </div>

    <!-- Progress Section -->
    <TodoProgress>
    </TodoProgress>
  </main>
</template>

<style scoped>

</style>