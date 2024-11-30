import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image';

const PresentationPage = () => {

    const t = useTranslations("Presentation");

    return (
        <article className='flex flex-col items-center justify-center'>

            <div className='flex flex-col items-center justify-center gap-6 text-pretty w-1/2 mt-10'>

                <h2 className='text-2xl font-semibold uppercase'>
                    {t('title')}
                </h2>

                <p className='text-pretty text-center'>
                    {t('text')}
                </p>

            </div>

            <div id='gallery' className='columns-3 gap-5 pt-5 w-4/5'>
                <img className='block w-full rounded-md mb-5' src="/images/cenia-5.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-3.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-6.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-8.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-10.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-7.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-4.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-12.webp" alt="" />
            </div>

        </article>
    )
}

export default PresentationPage