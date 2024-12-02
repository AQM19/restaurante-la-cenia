import { useTranslations } from 'next-intl'
import React from 'react'

const BookPage = () => {

    const t = useTranslations('Book');
    return (
        <section className='flex flex-col gap-40 items-center justify-center bg-neutral-50 text-neutral-900 py-10'>

            <div className='flex flex-col items-center justify-center text-center w-full p-4 sm:p-0 sm:w-1/5 gap-4'>
                <h2 className='text-3xl font-bold'>{t('title')}</h2>
                <p>
                    {t('description')}
                </p>
            </div>

            <div className='flex flex-col gap-4 items-center justify-center'>
                <h3 className='text-2xl font-bold'>{t('opening hours')}</h3>

                <div className='grid grid-cols-2 gap-x-32 gap-y-2'>

                    <span>{t('Monday')}</span>
                    <span>7:30 - 21</span>

                    <span>{t('Tuesday')}</span>
                    <span>7:30 - 21</span>

                    <span>{t('Wenesday')}</span>
                    <span>7:30 - 21</span>

                    <span>{t('Thursday')}</span>
                    <span>7:30 - 21</span>

                    <span>{t('Friday')}</span>
                    <span>7:30 - 21</span>

                    <span>{t('Saturday')}</span>
                    <span>7:30 - 21</span>

                    <span>{t('Sunday')}</span>
                    <span>7:30 - 21</span>

                </div>
            </div>

        </section>
    )
}

export default BookPage