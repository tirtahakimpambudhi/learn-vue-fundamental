import type { Currency } from "@codeinaja-users/types/Currency"

export type HeroCourseCard = {
    title: string,
    banner: string,
    price: number,
    percentDiscount: number,
    currency: Currency,
    timeDiscount: Date,
}