import React from 'react'
import NavBarComponent from '../navbar/NavBarComponent'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';


const HeaderComponent = () => {

    const t = useTranslations('HomePage');

    return (
        <header className='min-h-screen bg-center bg-cover bg-fixed bg-no-repeat bg-[url("/images/header.webp")] flex items-center justify-center relative'>

            <NavBarComponent />

            <div className='flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-8xl text-neutral-50 font-bold'>{t('welcome')}</h1>

                <p className='text-neutral-50'>{t('address')}</p>

                <Link href={'/'} className='border-2 border-neutral-50 py-4 px-8 text-xl text-neutral-50 font-semibold rounded-sm mt-10 uppercase'>
                    {t('book')}
                </Link>
            </div>

        </header>
    )
}

export default HeaderComponent