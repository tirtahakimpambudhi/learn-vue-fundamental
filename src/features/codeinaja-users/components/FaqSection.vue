<script setup lang="ts">

import {faqs} from "@codeinaja-users/utils/content.ts";
</script>

<template>
  <section class=" py-20 px-4 md:px-20">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 class="text-2xl md:text-4xl font-bold text-primary mb-4">
          Ada pertanyaan?
          <br />
          Tenang, kami bantu
        </h2>
        <p class="text-sm md:text-base text-gray-700 leading-relaxed">
          Tim support kami selalu siap bantu kamu kapan pun dibutuhkan. Nggak
          perlu ragu buat tanya seputar materi, teknis, atau kendala di
          platform. Fokus aja belajar, sisanya biar kami yang urus!
        </p>
      </div>

      <div class="space-y-4">
        <details
            class="bg-white border border-gray-300 rounded-md p-4 cursor-pointer"
            v-for="(faq, index) in faqs"
            :key="index">
          <summary class="font-semibold text-sm md:text-base text-black">
            {{ faq.question }}
          </summary>
          <p class="text-sm text-gray-600 mt-2">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>