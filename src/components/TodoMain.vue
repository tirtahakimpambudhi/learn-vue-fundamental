<script setup lang="ts">

import TodoForm from "@components/TodoForm.vue";
import TodoSearch from "@components/TodoSearch.vue";
import TodoItem from "@components/TodoItem.vue";
import TodoProgress from "@components/TodoProgress.vue";
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
      <TodoItem>
      </TodoItem>
    </div>

    <!-- Progress Section -->
    <TodoProgress>
    </TodoProgress>
  </main>
</template>

<style scoped>

</style>