import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localePrefix: 'as-needed',
    pathnames: {
        '/': '/'
    }
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);