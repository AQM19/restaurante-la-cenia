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

export default function LocaleLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className={`min-h-screen antialiased`}>
            {children}
        </main>
    );
}
