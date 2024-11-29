import type { Metadata } from "next";

import "./globals.css"
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Analytics } from "@vercel/analytics/next";

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

export default function LocaleLayout({ children, params: { locale } }: Readonly<{ children: React.ReactNode; params: { locale: string }; }>) {

    const messages = useMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <main className={`min-h-screen antialiased`}>
                        {children}
                    </main>
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
