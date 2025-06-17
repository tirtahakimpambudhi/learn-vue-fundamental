<script setup lang="ts">

import logo from '@assets/codeinajaLogoWhite.svg';
import iconLocation from '@assets/iconLocation.svg'
import iconPhone from '@assets/iconPhone.svg'
</script>

<template>
  <footer class="bg-orange-500 text-white py-10 px-4 md:px-20">
    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <div class="flex items-center mb-4">
          <span class="text-2xl font-bold text-white">Codein<span class='italic'>Aja</span></span>
          <div class="w-6 h-6 ml-1"><img :src="logo" alt="Logo CodeinAja" /></div>
        </div>
        <p>
          Ini bukan sekadar platform belajar, ini langkah pertama kamu jadi digital talent terbaik versi kamu sendiri.
        </p>
        <div class='mt-6 space-y-2'>
          <div class='flex items-center'>
            <img :src="iconLocation" alt="Icon Location" class='mr-2 w-4 h-4'/>
            <p>Yogyakarta, Indonesia</p>
          </div>
          <div class='flex items-center'>
            <img :src="iconPhone" alt="Icon Phone" class='mr-2 2 w-4 h-4'/>
            <p>+62 813-1234-5678</p>
          </div>
        </div>
      </div>
      <div>
        <h4 class="font-semibold mb-2">Program</h4>
        <ul>
          <li>Online Course</li>
          <li>Bootcamp</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-2">Company</h4>
        <ul>
          <li>Tentang Kami</li>
          <li>Blog</li>
          <li>Komunitas</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-2">Support</h4>
        <ul>
          <li>Hubungi Kami</li>
          <li>Syarat dan Ketentuan</li>
          <li>Kebijakan Privasi</li>
        </ul>
      </div>
    </div>
    <hr class='text-white/30 mt-4'/>
    <p class="text-center text-xs mt-10 text-white/65">© 2025 CodeinAja. All Rights Reserved</p>
  </footer>
</template>

<style scoped>

</style>