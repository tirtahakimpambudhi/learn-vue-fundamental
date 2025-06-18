<script setup lang="ts">

import { founders } from '@codeinaja-users/utils/content';

</script>

<template>
  <section class="py-20 px-4 md:px-20 bg-white">
    <div class="max-w-6xl mx-auto text-center md:text-left">
      <h2 class="text-3xl font-bold text-orange-600 mb-2">
        Meet Our Founder
      </h2>
      <p class="text-gray-500 mb-6">
        Bertemu dengan para founder{{" "}}
        <span class="font-semibold">CodeinAja</span> yang berpengalaman di
        bidang teknologi dan memiliki passion mengajar.
      </p>
      <hr class="mb-8 text-primary/80 w-1/6 border-2 rounded-full mx-auto md:mx-0" />

      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
             v-for="(founder, index) in founders" :key="index">
          <div class="text-left mb-4">
            <h3 class="text-lg font-bold mb-1 text-primary">{{ founder.name }}</h3>
            <p class="text-sm text-gray-500">{{ founder.role }}}</p>
          </div>
          <img
              :src="founder.image"
              :alt="founder.name"
              class="rounded-xl mb-2 w-full object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>