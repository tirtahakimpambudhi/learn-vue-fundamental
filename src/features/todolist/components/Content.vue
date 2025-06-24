<script setup lang="ts">
import type { List } from '@todolist/types/List';
import Item from '@todolist/components/Item.vue';
import type { Entity } from '@todolist/types/Entity';

defineProps<{
    todolist: List
}>();

const emits = defineEmits<{
    (e: 'update', item :Entity): void;
    (e: 'updateForm', item :Entity): void;
    (e: 'delete', item :Entity): void;
}>();
</script>

<template>
    <!-- Task List -->
    <div class="space-y-4">
      <!-- Task Item -->
      <template v-if="todolist.length > 0">
        <Item
            v-for="item in todolist"
            :key="item.id"
            :item="item"
            @update="emits('update', item)"
            @delete="emits('delete', item)"
            @update-form="emits('updateForm', item)"
        />
      </template>
      <template v-else>
        Tidak ada yang harus dikerjakan
      </template>
    </div>
</template>

<style scoped>
/* Your styles here */
</style>