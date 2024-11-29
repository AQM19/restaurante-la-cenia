import type { Metadata } from "next";

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

export default function PathnameLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main>
            {/* <HeaderComponent className={`col-span-7 sticky top-0 flex justify-between items-center px-10 py-2 ${buttonMenuPosition}`} /> */}
            <section>
                {children}
            </section>
            {/* <AsideComponent className={`${asidePosition} col-span-1 row-start-2`} /> */}
            {/* <SideMenu /> */}
            {/* <FooterComponent className={`col-span-7 p-10`} /> */}
        </main>
    );
}
