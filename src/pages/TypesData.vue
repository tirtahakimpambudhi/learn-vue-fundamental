<script setup lang="ts">
  import TypeData from '@components/TypeData.vue';
  import { type myTuple } from '@/types/alias';

  const myNumber : number = 1;
  const myString : string = "this is a string";
  const myBoolean : boolean = true;

  const myArr : string[] = ["a", "b", "c"];
  const tuple :myTuple = ["foo", "bar", 100, true];

  const arrReadOnly :ReadonlyArray<string> = ["a", "b", "c"];

</script>

<template>
  <TypeData :data="myNumber" :nameVariable="'myNumber'" />
  <br>
  <TypeData :data="myString" :nameVariable="'myString'" />
  <br>
  <TypeData :data="myBoolean" :nameVariable="'myBoolean'" />
  <br>
  <TypeData :data="myArr" :nameVariable="'myArr'" />
  <br>
  <TypeData :data="tuple" :nameVariable="'tuple'" />
  <br>
  <TypeData :data="arrReadOnly" :nameVariable="'arrReadOnly'" />>
</template>

<style scoped>

</style>