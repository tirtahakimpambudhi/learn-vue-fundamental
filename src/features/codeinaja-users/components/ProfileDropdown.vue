<script setup lang="ts">
import {useTemplateRef, onMounted, onUnmounted} from 'vue';
import { type User } from '@codeinaja-users/types/User';
import useToggle from '@states/useToggle';
import defaultProfile from '@assets/profile.jpg';
import {LogOut} from "lucide-vue-next";

defineProps<{ user: User }>();

const emits = defineEmits<{
    (e: 'logout') :void
}>();

const { state: isOpen, setFalse: endOpen, toggle: toggleOpen } = useToggle(false);
const dropdown = useTemplateRef('dropdownRef');

onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  document.addEventListener('mousedown', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
})


</script>

<template>
    <div class="relative" ref="dropdownRef">
      <!--  Profile Avatar Button  -->
      <button
        @click="toggleOpen()"
        class="flex items-center focus:outline-none"
        :aria-expanded="isOpen"
        aria-haspopup="true"
      >
        <div class="relative">
            <img
             :src="user.profile.photo ?? defaultProfile"
             :alt="user.username"
             class="w-8 h-8 rounded-full object-cover border-2 border-white"
            />
        </div>
      </button>

      <!-- Dropdown Menu -->
       <template v-if="isOpen">
          <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
            <div class="px-4 py-2 border-b border-gray-100">
              <p class="text-sm font-medium text-gray-900 truncate">{{ user.username }}</p>
            <p class="text-xs text-gray-500 truncate">{{ user.email  }}</p>
          </div>

          <!-- 
          <button
            onClick={handleEditProfile}
            class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User size={16} class="mr-2" />
            Edit Profile
          </button> -->

          <button
            @click="(_: Event) => {
              emits('logout')
              $router.push({name: 'users.home'});
              endOpen()
            }"
            class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut size="16" class="mr-2" />
            Log Out
          </button>
        </div>
       </template>
    </div>
</template>

<style scoped>
/* Your styles here */
</style>