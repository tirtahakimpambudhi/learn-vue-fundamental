<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

// Function to go back to previous page
const goBack = (): void => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}

// Optional: Track 404 error for analytics
const trackPageNotFound = (): void => {
  console.log('404 page accessed:', window.location.href)
}

// Call tracking on component mount (if needed)
trackPageNotFound()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl w-full text-center">
      <!-- Animated 404 Number -->
      <div class="relative mb-8">
        <h1 class="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          404
        </h1>
        <!-- Floating elements -->
        <div class="absolute top-0 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 1.5s;"></div>
      </div>

      <!-- Error Message -->
      <div class="mb-8">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Oops! Halaman Tidak Ditemukan
        </h2>
        <p class="text-xl md:text-2xl text-gray-300 mb-2">
          Sepertinya Anda tersesat di ruang cyber
        </p>
        <p class="text-lg text-gray-400">
          Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada
        </p>
      </div>

      <!-- Illustration -->
      <div class="mb-12 flex justify-center">
        <div class="relative">

          <!-- Stars around -->
          <div class="absolute -top-4 -left-4 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
          <div class="absolute top-8 -right-8 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle" style="animation-delay: 0.7s;"></div>
          <div class="absolute -bottom-6 left-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-twinkle" style="animation-delay: 1.2s;"></div>
          <div class="absolute bottom-12 -right-6 w-1 h-1 bg-pink-300 rounded-full animate-twinkle" style="animation-delay: 1.8s;"></div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <RouterLink 
          to="/" 
          class="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center"
        >
          <svg class="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Kembali ke Beranda
        </RouterLink>
        
        <button 
          @click="goBack" 
          class="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 flex items-center"
        >
          <svg class="w-5 h-5 mr-2 transform transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Halaman Sebelumnya
        </button>
      </div>


      <!-- Footer -->
      <div class="mt-16 text-gray-500 text-sm">
        <p>&copy; 2025 Your App Name. Semua hak cipta dilindungi.</p>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.8);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

/* Gradient text fallback for older browsers */
.text-transparent {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Backdrop blur fallback */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>