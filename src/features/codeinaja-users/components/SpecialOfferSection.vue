<script setup lang="ts">
import type { HeroCourseCard } from '@codeinaja-users/types/HeroCourseCard';
import laravelBanner from '@assets/laravelBanner.png'
import CopyPasteBox from '@codeinaja-users/components/CopyPasteBox.vue';
import HeroCourseCardComponent from './HeroCourseCard.vue';

const cards : HeroCourseCard[] = [
    {
        title: 'Course Laravel 12',
        banner: laravelBanner,
        currency: 'IDR',
        price: 150000,
        percentDiscon: 10
    }
]; 

</script>

<template>
    <template v-if="cards.length > 0">
              <section className="px-4 md:px-20 mb-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <!-- Course Card  -->
            <HeroCourseCardComponent 
                v-for="card in cards"
                :card
            ></HeroCourseCardComponent>
         <!-- <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
            {/* Timer */}
            <div className="flex justify-center lg:justify-start gap-6 md:gap-10 mb-6">
              {[
                { label: "Hari", value: "0" },
                { label: "Jam", value: "22" },
                { label: "Menit", value: "42" },
                { label: "Detik", value: "32" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div> -->

            <!-- Title -->
            <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-700 inline-block text-transparent bg-clip-text mb-3">
              Nikmati Penawaran Eksklusif dari Course kami
            </h4>

            <!-- Deskripsi -->
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto">
              Dapatkan akses belajar dengan harga lebih hemat.
              <br />
              Gunakan kode promo eksklusif ini saat checkout dan nikmati
              penawaran spesial khusus untuk pelajar di{" "}
              <span className="font-semibold text-gray-700">
                CodeinAja Course
              </span>
              .
            </p>

            <!--  Copy Paste Box  -->
            <div className="flex justify-center lg:justify-start">
                <CopyPasteBox></CopyPasteBox>
            </div>

        </div> 
      </section>
    </template>
    <template v-else></template>
</template>

<style scoped>
/* Your styles here */
</style>