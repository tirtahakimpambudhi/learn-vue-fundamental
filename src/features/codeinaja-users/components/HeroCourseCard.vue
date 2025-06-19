<script setup lang="ts">
import useHeroCourseCard from '../states/useHeroCourseCard';
import type { HeroCourseCard } from '../types/HeroCourseCard';

const props = defineProps<{
    card: HeroCourseCard
}>();

const cardState = useHeroCourseCard(props.card);

</script>

<template>
    <div class="bg-white border border-[#F3F4F6] rounded-xl overflow-hidden w-full lg:w-1/2">
    <div class="p-6">
        <div class="flex justify-between items-center mb-3">
        <h3 class="text-orange-600 font-semibold text-lg">
            {{ cardState.card.title }}
        </h3>
        <span v-if="cardState.card.percentDiscount" class="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">
            {{ cardState.card.percentDiscount }}% OFF
        </span>
        </div>
        <p class="text-sm text-gray-400" :class="cardState.card.percentDiscount ? 'line-through' : ''">
            {{ cardState.card.price.toLocaleString(cardState.card.currency) }}
        </p>
        <p v-if="cardState.card.percentDiscount" class="text-xl font-bold text-orange-500 mb-4">
        {{ cardState.discountPrice.value.toLocaleString(cardState.card.currency) }}
        </p>
        <img :src="cardState.card.banner" :alt="cardState.card.title" />
    </div>
    </div>
</template>

<style scoped>
/* Your styles here */
</style>