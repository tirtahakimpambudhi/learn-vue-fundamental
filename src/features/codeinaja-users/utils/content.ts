import type { Link } from "@codeinaja-users/types/Link";
import type {HeroCourseCard} from "@codeinaja-users/types/HeroCourseCard.ts";
import laravelBanner from "@assets/laravelBanner.png";
import profileOne from '@assets/profile-1.png';
import profileTwo from '@assets/profile-2.png';
import profileThree from '@assets/profile-3.png';
import type {Founder} from "@codeinaja-users/types/Founder.ts";
import type {Faq} from "@codeinaja-users/types/Faq.ts";

export const links :Link[] = [
    {
        name: 'users.home',
        to: '/users',
        description: 'Beranda'
    },
    {
        name: 'users.about',
        to: '/users/about',
        description: 'Tentang Kami'
    },
    {
        name: 'users.contact',
        to: '/users/contact',
        description: 'Kontak Kami'
    },
    {
        name: 'users.courses',
        to: '/users/courses',
        description: 'Kursus Online'
    },
];

export const cards : HeroCourseCard[] = [
    {
        title: 'Course Laravel 12',
        banner: laravelBanner,
        currency: 'IDR',
        price: 150000,
        percentDiscount: 10,
        timeDiscount: new Date('20/06/2025')
    }
];

export const founders : Founder[] = [
    {
        name: "Tirta Hakim Pambudhi",
        role: "Chief Technology Officer",
        image: profileOne,
    },
    {
        name: "Muhammad Rusdi Sandhika",
        role: "Chief Academic Officer",
        image: profileTwo,
    },
    {
        name: "Julian Sanz",
        role: "Chief Executive Officer",
        image: profileThree,
    },
]

export const faqs : Faq[] = [
    {
        question: "Apakah pembelajaran dilakukan secara online?",
        answer: "Ya, seluruh pembelajaran dilakukan secara online agar kamu bisa belajar di mana saja dan kapan saja.",
    },
    {
        question: "Apakah ada jadwal belajar yang tetap?",
        answer: "Tidak, kamu bisa belajar sesuai ritmemu karena semua materi tersedia secara fleksibel on-demand.",
    },
    {
        question: "Apakah ada batasan waktu akses untuk program ini?",
        answer: "Tidak ada batasan waktu. Kamu mendapatkan akses seumur hidup ke semua materi yang telah kamu beli.",
    },
    {
        question: "Bagaimana proses pembelajarannya?",
        answer: "Kamu akan belajar melalui video interaktif, modul latihan, dan sesi diskusi bersama mentor untuk pendalaman materi.",
    },
]