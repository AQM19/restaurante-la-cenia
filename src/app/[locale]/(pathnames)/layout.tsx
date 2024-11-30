import type { Metadata } from "next";
import FooterComponent from "@/components/ui/footer/FooterComponent";
import HeaderComponent from "@/components/ui/header/HeaderComponent";

export const metadata: Metadata = {
    title: "Restaurante La Ceña",
    description: "Web para el restaurante y posada la ceña de novales",
    authors: [
        {
            name: 'Aarón',
            url: 'https://aaronquintanalmartin.com/es'
        }
    ]
};

export default function PathnameLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">

            <HeaderComponent />

            <section>
                {children}
            </section>

            <FooterComponent />

        </main>
    );
}
