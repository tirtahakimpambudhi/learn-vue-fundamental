<script setup lang="ts">

  const number : number = 1;
  const string : string = "this is a string";
  const boolean : boolean = true;

  const arr : string[] = ["a", "b", "c"];
  const arrReadOnly :ReadonlyArray<string,3> = ["a","b","c"];

  arrReadOnly.push("d");
  console.log(arrReadOnly);
</script>

<template>
  <h1> Type Data Number</h1>
  <p> Value for variable number  : {{ number }} </p>
</template>

<style scoped>

</style>