import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import React from 'react'

const LogoComponent = () => {

    const t = useTranslations('HomePage');

    return (
        <Link href={'/'} >
            <h1 className='text-2xl font-bold text-neutral-50'>
                {t('title')}
            </h1>
        </Link>
    )
}

export default LogoComponent