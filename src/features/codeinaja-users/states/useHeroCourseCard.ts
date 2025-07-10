import { computed, reactive } from "vue";
import type { HeroCourseCard } from "@codeinaja-users/types/HeroCourseCard";

export default function useHeroCourseCard(value : HeroCourseCard| null) {
    const card = reactive<HeroCourseCard>({
        title: value?.title ?? '',
        banner: value?.banner ?? '',
        price: value?.price ?? 0,
        percentDiscon: value?.percentDiscon ?? 0,
        currency: value?.currency ?? 'IDR'
    });
    
    const setCard = (value: HeroCourseCard) => {
        card.title = value.title;
        card.price = value.price;
        card.banner = value.banner
        card.percentDiscon = value.percentDiscon;
        card.currency = value.currency
    };

    const disconPrice = computed((): number => {
        return card.price - (card.price * card.percentDiscon / 100);
    });

    return {
        card,
        setCard,
        disconPrice,
    };
}
