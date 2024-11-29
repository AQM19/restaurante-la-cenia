import type { Metadata } from "next";
import FooterComponent from "@/shared/ui/footer/FooterComponent";
import HeaderComponent from "@/shared/ui/header/HeaderComponent";

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
        <main className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            
            <HeaderComponent className="bg-red-500"></HeaderComponent>

            <section>
                {children}
            </section>
            
            <FooterComponent className="bg-red-500"></FooterComponent>
        </main>
    );
}
