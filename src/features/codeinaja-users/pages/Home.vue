<script setup lang="ts">
import usePageTitle from "@states/usePageTitle.ts";
import bgGridHero from '@assets/bgGridHero.png';
import cardWhy from '@assets/cardWhy.png';
import badge from '@assets/badge.svg';
import SpecialOfferSection from "@codeinaja-users/components/SpecialOfferSection.vue";
import FounderSection from "@codeinaja-users/components/FounderSection.vue";
import FaqSection from "@codeinaja-users/components/FaqSection.vue";


usePageTitle("Home");


</script>

<template>
  <div>
    <main class="bg-white text-black overflow-x-hidden">
<!--      {/* Hero Section */}-->
      <section class="pt-20 pb-28 px-4 md:px-20 relative min-h-screen flex items-center">
        <div
            class="absolute inset-0 bg-no-repeat bg-cover z-0"
            :style="`background-image: url(${bgGridHero})`"
        />

        <div class="relative z-10 max-w-5xl mx-auto text-center">
          <!-- {/* Badge */} -->
          <div class="flex justify-center">
            <img :src="badge" alt="Badge" />
          </div>
          <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4">
            <span class="bg-gradient-to-l from-[#1A1A1A] via-[#FFA45B] to-[#FF6B00] inline-block text-transparent bg-clip-text">
              Wujudkan Karier Digital
            </span>
            <br />
            Impianmu Dimulai dari Sini
          </h1>
          <p class="text-gray-400 text-sm md:text-base mb-6 leading-relaxed max-w-3xl mx-auto md:max-w-xl">
            Platform kursus online terbaik dengan bimbingan mentor berpengalaman
            dan materi yang lengkap serta terstruktur.
          </p>
          <button class="bg-primary hover:bg-orange-600 text-white py-3 px-6 rounded font-semibold">
            Mulai Belajar Sekarang
          </button>
        </div>
      </section>

      <SpecialOfferSection />

<!--      {/* Kenapa CodeinAja */}-->
      <section class="py-10 px-4 md:px-20 bg-orange-500">
        <div class="max-w-6xl mx-auto">
          <img
              :src="cardWhy"
              alt="Kenapa CodeinAja"
              class="w-full h-auto rounded-lg"
          />
        </div>
      </section>
      <FounderSection />
      <FaqSection/>
    </main>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>