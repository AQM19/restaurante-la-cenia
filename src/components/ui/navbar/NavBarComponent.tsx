import React from 'react'
import LogoComponent from '../logo/LogoComponent'
import { LiaFacebookF, LiaInstagram, LiaTripadvisor } from 'react-icons/lia'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Link as I18nLink } from '@/i18n/routing';


const NavBarComponent = () => {

    const t = useTranslations("Navigation");

    return (
        <div className='flex flex-row justify-between items-center px-10 py-4 fixed top-0 w-full z-10 bg-neutral-100 bg-opacity-60'>

            <LogoComponent />

            <nav className='flex flex-row justify-end gap-4'>

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

            <div className='flex flex-row gap-4'>

                <Link href={'https://www.facebook.com/la.cena.restaurante/?locale=es_LA'} target='_blank'>
                    <LiaFacebookF size={22} />
                </Link>

                <Link href={'https://www.instagram.com/restaurantelacena/'} target='_blank' >
                    <LiaInstagram size={22} />
                </Link>

                <Link href={'https://www.tripadvisor.es/Hotel_Review-g2467304-d2678821-Reviews-Apartamentos_La_Cena-Novales_Cantabria.html'} target='_blank' >
                    <LiaTripadvisor size={22} />
                </Link>

            </div>

        </div>
    )
}

export default NavBarComponent