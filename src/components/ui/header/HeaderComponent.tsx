import React from 'react'
import NavBarComponent from '../navbar/NavBarComponent'
import { useTranslations } from 'next-intl';


const HeaderComponent = () => {

    const t = useTranslations('HomePage');

    return (
        <header className='min-h-screen bg-center bg-cover bg-fixed bg-no-repeat bg-[url("/images/header.webp")] flex items-center justify-center relative'>

            <NavBarComponent />

            <h1 className='rounded-sm p-6 text-2xl text-neutral-50 font-bold bg-neutral-900 bg-opacity-60'>
                {t('title')}
            </h1>

        </header>
    )
}

export default HeaderComponent