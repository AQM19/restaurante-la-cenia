import React from 'react'
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const MenuPage = () => {
    return (
        <article className='w-4/5 m-auto flex flex-col-reverse sm:flex-row items-center justify-evenly py-6 sm:py-0'>

            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 gap-4'>
                <h2 className='text-2xl font-semibold uppercase'>
                    Menu
                </h2>

                <p className='text-pretty text-justify sm:text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec feugiat arcu.
                    Cras suscipit neque ut metus convallis, eu commodo magna tempus.
                </p>

                <Link href={'/'} className='border-2 border-neutral-50 py-4 px-8 text-xl text-neutral-50 font-semibold rounded-sm mt-10 uppercase'>
                    Carta
                </Link>
            </div>

            <Image src={'/images/plato.png'} alt={''} width={400} height={400} />


        </article>
    )
}

export default MenuPage