import { computed, reactive } from "vue";
import type { HeroCourseCard } from "@codeinaja-users/types/HeroCourseCard";

export default function useHeroCourseCard(value : HeroCourseCard| null) {
    const card = reactive<HeroCourseCard>({
        title: value?.title ?? '',
        banner: value?.banner ?? '',
        price: value?.price ?? 0,
        percentDiscount: value?.percentDiscount ?? 0,
        currency: value?.currency ?? 'IDR',
        timeDiscount: new Date()
    });
    
    const setCard = (value: HeroCourseCard) => {
        card.title = value.title;
        card.price = value.price;
        card.banner = value.banner
        card.percentDiscount = value.percentDiscount;
        card.currency = value.currency
        card.timeDiscount = value.timeDiscount;
    };

    const discountPrice = computed((): number => {
        return card.price - (card.price * card.percentDiscount / 100);
    });

    return {
        card,
        setCard,
        discountPrice,
    };
}
