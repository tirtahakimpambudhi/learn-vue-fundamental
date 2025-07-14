import type { Currency } from "@codeinaja-users/types/Currency"

export type HeroCourseCard = {
    title: string,
    banner: string,
    price: number,
    percentDiscon: number,
    currency: Currency
}