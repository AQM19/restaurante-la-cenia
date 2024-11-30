import { useTranslations } from 'next-intl'
import React from 'react'

const PresentationPage = () => {

    const t = useTranslations("Presentation");

    return (
        <article className='flex flex-col items-center justify-center py-6 px-4'>

            <div className='flex flex-col items-center justify-center gap-6 text-pretty w-full sm:w-1/2 mt-10'>

                <h2 className='text-2xl font-semibold uppercase'>
                    {t('title')}
                </h2>

                <p className='text-pretty text-justify sm:text-center'>
                    {t('text')}
                </p>

            </div>

            <div id='gallery' className='columns-1 sm:columns-3 gap-5 pt-5 w-full sm:w-4/5'>
                <img className='block w-full rounded-md mb-5' src="/images/cenia-5.webp" alt="" />
                <img className='hidden sm:block w-full rounded-md mb-5' src="/images/cenia-3.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-6.webp" alt="" />
                <img className='hidden sm:block w-full rounded-md mb-5' src="/images/cenia-8.webp" alt="" />
                <img className='hidden sm:block w-full rounded-md mb-5' src="/images/cenia-10.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-7.webp" alt="" />
                <img className='block w-full rounded-md mb-5' src="/images/cenia-4.webp" alt="" />
                <img className='hidden sm:block w-full rounded-md mb-5' src="/images/cenia-12.webp" alt="" />
            </div>

        </article>
    )
}

export default PresentationPage