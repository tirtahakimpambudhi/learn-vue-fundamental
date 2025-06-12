<script setup lang="ts">
import CardLink from '@/components/CardLink.vue';
import type { CardData } from '@/types/CardData';


const cards :CardData[] = [
  {
    id: 1,
    title: 'Belajar State Dan Vue Composition',
    description: 'Hasil Pembelajaran State dan Vue Composition API',
    color: 'blue',
    icon: 'book',
    route: '/learn/state'
  }, 
  {
    id: 2,
    title: 'Belajar Reactive dan Input Binding di Vue',
    description: 'Hasil Reactive dan Input Binding di Vue',
    color: 'blue',
    icon: 'book',
    route: '/learn/form'
  },
  {
    id: 3,
    title: 'Belajar Tipedata Typescript dan Flow Control Statement (If,Loop, dan lain-lain)',
    description: 'Hasil Belajar Tipedata Typescript dan Flow Control Statement',
    color: 'green',
    icon: 'book',
    route: '/learn/type'
  }
];


</script>

<template>
  <CardLink :datas="cards"></CardLink>
</template>
