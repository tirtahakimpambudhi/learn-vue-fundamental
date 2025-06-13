<script setup lang="ts">

import ButtonIncrement from "@learn/components/ButtonIncrement.vue";
import {ref} from "vue";

const count = ref<number>(0)

</script>

<template>
  <ButtonIncrement :count="count" @increment="() => {count++}" />
</template>

<style scoped>

</style>