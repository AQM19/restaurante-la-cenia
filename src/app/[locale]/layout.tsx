import { Analytics } from "@vercel/analytics/next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import "./globals.css"

export const metadata: Metadata = {
    title: "Restaurante La Ceña",
    description: "",
    authors: [
        {
            name: 'Aarón',
            url: 'https://aaronquintanalmartin.com/es'
        }
    ]
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {

    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Madrid">
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
