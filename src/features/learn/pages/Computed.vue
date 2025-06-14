<script setup lang="ts">

  import {personState} from "@learn/states/person";
  import {computed, ref} from "vue";

  const count = ref<number>(0);


  const fullNameNonComputed = () => {
    console.log('non computed function call')
    return `${personState.firstName} ${personState.lastName}`
  }

  const fullNameComputed = computed(() => {
    console.log('computed function call')
    return `${personState.firstName} ${personState.lastName}`
  })

  const increment = () => {
    console.log('increment function call')
    count.value++
  }


</script>

<template>

  <button @click="increment">Count value : {{ count }}</button>
  <!--  First Name  -->
  <div class="mb-2">
    <label for="firstname" class="block text-sm/6 font-medium text-gray-300 text-left">
      First Name
    </label>
    <div class="mt-2">
      <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        <input
            type="text"
            name="firstName"
            id="firstName"
            v-model="personState.firstName"
            class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
      </div>
    </div>
  </div>
  <div class="mb-2">
    <label for="lastName" class="block text-sm/6 font-medium text-gray-300 text-left">
      Last Name
    </label>
    <div class="mt-2">
      <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        <input
            type="text"
            name="lastName"
            id="lastName"
            v-model="personState.lastName"
            class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
      </div>
    </div>
  </div>

  <h4> Full Name : {{ fullNameNonComputed() }} ( Non Computed ) </h4>
  <h4 class="font-bold"> Full Name : {{ fullNameComputed }} ( Computed ) </h4>
</template>

<style scoped>

</style>