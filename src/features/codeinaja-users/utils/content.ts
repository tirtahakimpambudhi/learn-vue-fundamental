import type { Link } from "@codeinaja-users/types/Link";

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