import BookATableHeaderComponent from '@/components/ui/book-a-table-header/BookATableHeaderComponent'
import FooterComponent from '@/components/ui/footer/FooterComponent'
import NavBarComponent from '@/components/ui/navbar/NavBarComponent'
import SidebarComponent from '@/components/ui/sidebar/SidebarComponent'
import React from 'react'

const InnerLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <BookATableHeaderComponent />
            <NavBarComponent />
            <SidebarComponent />
            <main className="min-h-auto grid grid-rows-[1fr_auto] overflow-x-hidden">
                {children}
            </main>
            <FooterComponent />
        </div>
    )
}

export default InnerLayout