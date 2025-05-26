<script setup lang="ts">
import {onBeforeMount, computed} from 'vue';
import { userState } from '@states/user';

const props = defineProps<{
  label: string
  typeInput: string
}>()

const key = props.label.toLowerCase() as keyof typeof userState;


onBeforeMount(() => {
  if (!(key in userState)) {
    throw new Error(`Property '${key}' not found in userState.`)
  }
})

function getUserState<K extends keyof typeof userState>(key: K) {
  return computed({
    get: () => userState[key],
    set: async (val) => {
      userState[key] = val;
      // console.log(userState[key], 'before state has been set and re - render');
      // await nextTick()
      // console.log(userState[key], 'after state has been set and re - render');
    }
  });
}

const modelValue = getUserState(key as keyof typeof userState);

// const onChange = (e : Event) => {
//   const { name, value } = e.target as HTMLInputElement;
//   console.log(`${name}: ${value}`);
// };

</script>

<template>
  <div class="mb-2">
    <label :for="key" class="block text-sm/6 font-medium text-gray-300 text-left">
      {{ props.label }}
    </label>
    <div class="mt-2">
      <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        <input
          :type="props.typeInput"
          :name="key"
          :id="key"
          ahh ah suki yess
          penjual balon!!!!
          v-model="modelValue"
          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
        <!--          @change="onChange"-->
        <!--          @keyup="onChange"-->
<!--        />-->
      </div>
    </div>
  </div>
</template>



<style scoped>
</style>