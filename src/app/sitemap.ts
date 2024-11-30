// import { getPathname } from '@/i18n/routing';
// import { MetadataRoute } from 'next';
// import { routing } from '../i18n/routing';
// import { host } from '@/config';

// export default function sitemap(): MetadataRoute.Sitemap {
//     const keys = Object.keys(routing.pathnames) as Array<keyof typeof routing.pathnames>;

//     function getUrl(
//         key: keyof typeof routing.pathnames,
//         locale: (typeof routing.locales)[number]
//     ) {
//         const pathname = getPathname({ locale, href: key });
//         return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
//     }

//     return keys.map((key) => ({
//         url: getUrl(key, routing.defaultLocale),
//         alternates: {
//             languages: Object.fromEntries(
//                 routing.locales.map((locale: any) => [locale, getUrl(key, locale)])
//             )
//         }
//     }));
// }