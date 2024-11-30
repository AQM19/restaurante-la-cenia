'use client'

import React from 'react'
import LogoComponent from '../logo/LogoComponent'
import { LiaFacebookF, LiaInstagram, LiaTripadvisor } from 'react-icons/lia'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Link as I18nLink } from '@/i18n/routing';
import { IoMenu } from 'react-icons/io5'
import { useSidebarStatus } from '@/core/services/ui/sidebar-status.store'


const NavBarComponent = () => {

    const t = useTranslations("Navigation");
    const openSideMenu = useSidebarStatus(state => state.openSideMenu);


    return (
        <div className='flex flex-row justify-between items-center px-5 sm:px-10 py-4 fixed top-0 left-0 w-full bg-neutral-100 bg-opacity-60'>

            <LogoComponent />

            <nav className='hidden sm:flex flex-row justify-end gap-4'>

                <I18nLink
                    className={`p-2 text-sm text-neutral-900 font-semibold hover:scale-105 transition-all uppercase`}
                    href={'/'}
                >
                    {t('home')}
                </I18nLink>

                <I18nLink
                    className={`p-2 text-sm text-neutral-900 font-semibold hover:scale-105 transition-all uppercase`}
                    href={'/'}
                >
                    {t('kitchen')}
                </I18nLink>

                <I18nLink
                    className={`p-2 text-sm text-neutral-900 font-semibold hover:scale-105 transition-all uppercase`}
                    href={'/'}
                >
                    {t('hostel')}
                </I18nLink>

                <I18nLink
                    className={`p-2 text-sm text-neutral-900 font-semibold hover:scale-105 transition-all uppercase`}
                    href={'/'}
                >
                    {t('apartments')}
                </I18nLink>

            </nav>

            <div className='flex flex-row gap-4 text-neutral-900'>

                <div className='flex-row gap-4 hidden sm:flex'>

                    <Link href={'https://www.facebook.com/la.cena.restaurante/?locale=es_LA'} target='_blank'>
                        <LiaFacebookF size={28} />
                    </Link>

                    <Link href={'https://www.instagram.com/restaurantelacena/'} target='_blank' >
                        <LiaInstagram size={28} />
                    </Link>

                    <Link href={'https://www.tripadvisor.es/Hotel_Review-g2467304-d2678821-Reviews-Apartamentos_La_Cena-Novales_Cantabria.html'} target='_blank' >
                        <LiaTripadvisor size={28} />
                    </Link>

                </div>

                <button onClick={() => openSideMenu()} className='block sm:hidden'>
                    <IoMenu size={28}></IoMenu>
                </button>

            </div>

        </div>
    )
}

export default NavBarComponent