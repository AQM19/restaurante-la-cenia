'use client'

import { IoCloseOutline } from 'react-icons/io5';
import { useSidebarStatus } from '@/core/services/ui/sidebar-status.store';
import clsx from 'clsx';
import React from 'react'

const SidebarComponent = () => {

    const isSideMenuOpen = useSidebarStatus(state => state.isSideMenuOpen);
    const closeMenu = useSidebarStatus(state => state.closeSideMenu);

    return (
        <aside>
            {/* Background black */}
            {
                isSideMenuOpen && (
                    <div
                        className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'
                    />
                )
            }

            {/* Blur */}
            {
                isSideMenuOpen && (
                    <div
                        onClick={closeMenu}
                        className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
                    />
                )
            }

            {/* Side menu */}
            <nav
                className={
                    clsx(
                        'fixed p-5 right-0 top-0 w-full md:w-1/2 lg:w-1/4 h-screen flex flex-col bg-neutral-50 dark:bg-neutral-800 z-20 shadow-2xl transform transition-all duration-300',
                        {
                            'translate-x-full': !isSideMenuOpen
                        }
                    )
                }>

                <IoCloseOutline
                    size={28}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={() => closeMenu()}
                />

            </nav>

        </aside>
    )
}

export default SidebarComponent