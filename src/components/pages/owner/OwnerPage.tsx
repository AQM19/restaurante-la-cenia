import React from 'react'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const OwnerPage = () => {

    const t = useTranslations('Owner');

    return (
        <article className='flex flex-col-reverse sm:flex-row items-center justify-evenly gap-4 sm:gap-10 pt-6 sm:pt-0 px-4 bg-orange-100 sm:m-auto text-neutral-900'>

            <Image src={'/images/jefe.png'} alt={''} width={400} height={400} />

            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 gap-4'>
                <h2 className='text-2xl font-semibold uppercase'>
                    {t('title')}
                </h2>

                <p className='text-pretty text-justify sm:text-center'>
                    {t('description')}
                </p>
            </div>

        </article>
    )
}

export default OwnerPage