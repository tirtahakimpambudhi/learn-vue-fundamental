<script setup lang="ts">
import { computed } from 'vue';
import useCopied from '@codeinaja-users/states/useCopied';
import iconChecklist from '@assets/iconChecklist.svg';
import iconPaste from '@assets/iconPaste.png';

const { copied, handleCopied} = useCopied();

const srcImage = computed(() => {
    return copied.value ? iconChecklist : iconPaste;
});

</script>

<template>
    <div class="mb-4">
      <div class="bg-white border-2 border-dashed border-[#D1D5DB] text-sm px-3 py-2 inline-block rounded text-[#6B7280]">
        <div class="flex gap-4 items-center">
          <strong>FOKUSCODING</strong>
          <button @click="handleCopied('FOKUSCODING')"  class="hover:opacity-75 active:scale-95 transition cursor-pointer">
            <img :src="srcImage" alt="icon" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
</template>

<style scoped>
/* Your styles here */
</style>