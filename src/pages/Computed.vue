<script setup lang="ts">

  import {personState} from "@states/person";
  import {isSubmitState} from "../states/isSubmit.ts";
  import Input from "@components/Input.vue";

  const fullNameNonComputed = () => {
    console.log('non computed function call')
    return `${personState.firstName} ${personState.lastName}`
  }

  const fullNameComputed = () => {
    console.log('computed function call')
    return `${personState.firstName} ${personState.lastName}`
  }

</script>

<template>
  <form>
    <Input label="FirstName" type-input="text"/>
    <Input label="LastName" type-input="text"/>
    <button type="submit" >
      {{ isSubmitState ? 'Submitting...' : 'Submit' }}
    </button>
  </form>
</template>

<style scoped>

</style>