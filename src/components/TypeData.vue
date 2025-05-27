<script setup lang="ts">
import { type typeData } from '@/types/alias'

const props = defineProps<{
  data: typeData;
  nameVariable: string;
}>();

const dataReadOnly = props.data as Readonly<typeData>;

function printTypeData(data : typeData ): string {
  return Array.isArray(data) ? 'array' : typeof data;
}
</script>

<template>
  <h4>Type {{ props.nameVariable }}: {{ printTypeData(dataReadOnly) }}</h4>

  <template v-if="Array.isArray(props.data)">
    <ul>
      <li v-for="(item, index) in dataReadOnly" :key="index">
        <h4> Type item - {{ index + 1 }} : {{ printTypeData(item) }}</h4>
        <p> Value for item - {{ index + 1 }} : {{ item }}</p>
      </li>
    </ul>
  </template>

  <template v-else>
    <p>Value for {{ props.nameVariable }}: {{ dataReadOnly }}</p>
  </template>
</template>

<style scoped>
ul {
  padding-left: 1.2rem;
}
</style>
