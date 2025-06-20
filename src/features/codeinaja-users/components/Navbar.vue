<script setup lang="ts">
import { useAPIStore } from '@codeinaja-users/stores/useAPIStore';
import logo from '@assets/codeinajaLogo.svg'
import {useRouter} from 'vue-router';
import { links } from '@codeinaja-users/utils/content';
import useToggle from '@states/useToggle';
import ProfileDropdown from '@codeinaja-users/components/ProfileDropdown.vue';
import { onMounted } from 'vue';
import defaultProfile from '@assets/profile.jpg';


const { user, loadUser, logout } = useAPIStore();
const router = useRouter(); 
onMounted(() => {
    loadUser()
})


const { state: isMenuOpen, setState: setMenuOpen, toggle: menuToggle } = useToggle(false);


</script>

<template>
        <nav class="flex items-center justify-between px-4 md:px-12 py-4 bg-white shadow-sm w-full">
    <!-- Logo -->
      <div class="flex items-center">
        <RouterLink :to="{ name: 'users.home' }">
          <span class="text-2xl font-bold text-black">
            Codein<span class="italic">Aja</span>
          </span>
          <div class="w-6 h-6 ml-1">
            <img :src="logo" alt="Logo CodeinAja" />
          </div>
        </RouterLink>
      </div>

      <!--  Mobile Menu Button  -->
      <div class="md:hidden">
        <button @click="menuToggle()" class="text-gray-600 focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <RouterLink :active-class="'text-orange-500 font-medium'" class="text-gray-600" v-for="(link, index) in links" :key="index" :to="{name: link.name}">{{ link.description }}</RouterLink>
      </div>

      <!-- Login/Register Buttons or User Profile -->
      <div class="hidden md:flex items-center space-x-4">
        <template v-if="user">
          <div class="flex items-center space-x-4">
            <template v-if="user.role === 'mentor' || user.role === 'admin'">
              <button
                @click="(_ :Event) => { router.push({ name: 'users.dashboard' }) }"
                class="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition-colors">
                Dashboard
              </button>
            </template>
            <ProfileDropdown 
              :user="user"
              @logout="logout()"
            />
          </div>
        </template>
        <template v-else>
            <RouterLink
              :to="{ name: 'users.register' }"
              class="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition-colors"
            >
              Daftar
            </RouterLink>
            <RouterLink
              :to="{ name: 'users.login' }"
              class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Masuk
            </RouterLink>
        </template>
      </div>

      <!-- Mobile Menu -->
      <template v-if="isMenuOpen">
        <div class="absolute top-16 left-0 right-0 bg-white shadow-md py-4 md:hidden z-10">
          <div class="flex flex-col space-y-4 px-4">
            <RouterLink v-for="(link, index) in links" :active-class="'text-orange-500 font-medium'" class="text-gray-600"  :key="index" :to="link.name">{{ link.description }}</RouterLink>
          <template v-if="user">
            <div class="flex flex-col space-y-2 pt-2">
              <div class="flex items-center space-x-2 py-2">
                <img
                    :src="user.profile.photo ?? defaultProfile"
                    :alt="user.username"
                    class="w-8 h-8 rounded-full object-cover border-2 border-white"
                />
                <span class="text-gray-700">{{ user.username }}</span>
              </div>
              <button
                  v-if="user.role === 'admin' || user.role === 'mentor'"
                  @click="(_: Event) => {
                    setMenuOpen(false)
                    router.push({ name: 'users.dashboard' })
                  }"
                  class="border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-center">
                Dashboard
              </button>
              <button
                  @click="(_: Event) => {
                    setMenuOpen(false)
                    logout()
                  }"
                  class="bg-orange-500 text-white px-4 py-2 rounded-full text-center">
                Logout
              </button>
            </div>
          </template>
          <template v-else>
            <RouterLink
                :to="{ name: 'users.register' }"
                class="border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-center"
                @click="(_:Event) => {
                  setMenuOpen(false)
                }"
            >
            Daftar
            </RouterLink>
            <RouterLink
                :to="{ name: 'users.login' }"
                className="bg-orange-500 text-white px-4 py-2 rounded-full text-center"
                @click="(_:Event) => {
                  setMenuOpen(false)
                }"
            >
            Masuk
            </RouterLink>
          </template>
          </div>
        </div>
      </template>
    </nav>
</template>

<style scoped>
/* Your styles here */
</style>