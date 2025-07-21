<script setup lang="ts">
import CardLink from '@components/CardLink.vue';
import type {CardData} from '@/types/CardData'



const cards: CardData[] = [
  {
    id: 1,
    title: 'Learn',
    description: 'Berisi hasil pembelajaran Web Framework Vue 3',
    route: '/learn',
    icon: 'book',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Todo List',
    description: 'Kelola tugas dan aktivitas harian Anda',
    route: '/todolist',
    icon: 'clipboard',
    color: 'green'
  }
]

</script>

<template>
    <CardLink :datas="cards"></CardLink>
</template>

<style scoped>
/* Your styles here */
</style>