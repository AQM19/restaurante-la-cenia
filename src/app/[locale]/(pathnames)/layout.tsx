import type { Metadata } from "next";
import FooterComponent from "@/components/ui/footer/FooterComponent";
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import SidebarComponent from "@/components/ui/sidebar/SidebarComponent";
import NavBarComponent from "@/components/ui/navbar/NavBarComponent";

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
        <div>
            <HeaderComponent />
            <NavBarComponent />
            <SidebarComponent />
            <main className="min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">
                {children}
            </main>
            <FooterComponent />
        </div>
    );
}
