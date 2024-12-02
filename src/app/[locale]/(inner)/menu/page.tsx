import { MenuConfig } from '@/core/config/menu.config'
import { useTranslations } from 'next-intl'
import React from 'react'

const MenuCardPage = () => {

    const t = useTranslations('Menu')

    return (
        <section className='flex flex-col p-6 items-center w-full bg-neutral-50 text-neutral-900'>

            <div className="w-full max-w-3xl mx-auto bg-[#f8f5e9] rounded-md border-2">

                <div className="text-center">
                    <h3 className="text-4xl font-serif text-[#4a3f35]">{t('restaurant name')}</h3>
                    <p className="text-sm italic text-[#7d6e5d]">{t('restaurant slogan')}</p>
                </div>

                <article className='p-4'>
                    {MenuConfig.map((section, index) => (
                        <div key={section.title} className="mb-8">
                            <h2 className="text-2xl font-serif text-[#4a3f35] mb-4">{section.title}</h2>
                            {section.plates.map((item, itemIndex) => (
                                <div key={item.name} className="mb-4">
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-lg font-medium text-[#7d6e5d]">{item.name}</h3>
                                        <span className="text-[#7d6e5d]">{item.price}</span>
                                    </div>
                                    <p className="text-sm text-[#9b8e7e] mt-1">{item.description}</p>
                                    {itemIndex < section.plates.length - 1 && (
                                        <hr className="my-4 bg-[#d3c7b6]" />
                                    )}
                                </div>
                            ))}
                            {index < MenuConfig.length - 1 && (
                                <div className="flex items-center justify-center my-8">
                                    <div className="h-px bg-[#d3c7b6] w-1/4"></div>
                                    <span className="mx-4 text-[#7d6e5d]">✽</span>
                                    <div className="h-px bg-[#d3c7b6] w-1/4"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </article>
            </div>

        </section>
    )
}

export default MenuCardPage