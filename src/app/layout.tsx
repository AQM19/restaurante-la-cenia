import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fuck Offendiditos",
    description: "Página de humor",
    authors: [
        {
            name: 'Aarón',
            url: 'https://aaronquintanalmartin.com/es'
        }
    ]
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    console.log('HOLA')
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
}
