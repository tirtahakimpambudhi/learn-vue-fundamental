<script setup lang="ts">
import CopyPasteBox from '@codeinaja-users/components/CopyPasteBox.vue';
import HeroCourseCardComponent from './HeroCourseCard.vue';
import TimerHeroCourseCard from "@codeinaja-users/components/TimerHeroCourseCard.vue";
import { cards } from '@codeinaja-users/utils/content';

</script>

<template>
    <template v-if="cards.length > 0">
              <section class="px-4 md:px-20 mb-20">
        <div class="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div class="bg-white border border-[#F3F4F6] rounded-xl overflow-hidden w-full lg:w-1/2">
            <!-- Course Card  -->
            <template v-for="(card, index) in cards" :key="index">
              <HeroCourseCardComponent
                  :card
              ></HeroCourseCardComponent>
              <div class="flex justify-center lg:justify-start gap-6 md:gap-10 mb-6" >
                <TimerHeroCourseCard :time-discount="card.timeDiscount"></TimerHeroCourseCard>
              </div>
            </template>
          </div>
        <div class="w-full lg:w-1/2 px-4 text-center lg:text-left">
            <!-- Title -->
            <h4 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-700 inline-block text-transparent bg-clip-text mb-3">
              Nikmati Penawaran Eksklusif dari Course kami
            </h4>

            <!-- Deskripsi -->
            <p class="text-sm md:text-base text-gray-600 mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto">
              Dapatkan akses belajar dengan harga lebih hemat.
              <br />
              Gunakan kode promo eksklusif ini saat checkout dan nikmati
              penawaran spesial khusus untuk pelajar di{" "}
              <span class="font-semibold text-gray-700">
                CodeinAja Course
              </span>
              .
            </p>

            <!--  Copy Paste Box  -->
            <div class="flex justify-center lg:justify-start">
                <CopyPasteBox></CopyPasteBox>
            </div>

        </div>
        </div>
      </section>
    </template>
    <template v-else></template>
</template>

<style scoped>
/* Your styles here */
</style>