<script setup lang="ts">
import useHeroCourseCard from '../states/useHeroCourseCard';
import type { HeroCourseCard } from '../types/HeroCourseCard';



const props = defineProps<{
    card: HeroCourseCard
}>();

const cardState = useHeroCourseCard(props.card);

</script>

<template>
    <div className="bg-white border border-[#F3F4F6] rounded-xl overflow-hidden w-full lg:w-1/2">
    <div className="p-6">
        <div className="flex justify-between items-center mb-3">
        <h3 className="text-orange-600 font-semibold text-lg">
            {{ cardState.card.title }}
        </h3>
        <span v-if="cardState.card.percentDiscon" className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">
            {{ cardState.card.percentDiscon }}% OFF
        </span>
        </div>
        <p className="text-sm text-gray-400" :class="cardState.card.percentDiscon ? 'line-through' : ''">
            {{ cardState.card.price.toLocaleString(cardState.card.currency) }}
        </p>
        <p v-if="cardState.card.percentDiscon" className="text-xl font-bold text-orange-500 mb-4">
        {{ cardState.disconPrice.value.toLocaleString(cardState.card.currency) }}
        </p>
        <img :src="cardState.card.banner" :alt="cardState.card.title" />
    </div>
    </div>
</template>

<style scoped>
/* Your styles here */
</style>