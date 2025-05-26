<script setup lang="ts">

import ButtonIncrement from "@components/ButtonIncrement.vue";
import {ref} from "vue";

const count = ref<number>(0)

</script>

<template>
<!--  TODO: FIX THISS -->
  <ButtonIncrement :count="count" @increment="() => {count++}" />
</template>

<style scoped>

</style>