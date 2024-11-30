import { Link } from '@/i18n/routing'
import React from 'react'
import LogoComponent from '../logo/LogoComponent'

const NavBarComponent = () => {
    return (
        <div className='flex flex-row justify-between items-center px-10 py-4 fixed top-0 w-full z-10 bg-neutral-900 bg-opacity-60'>

            <LogoComponent />

            <nav className='flex flex-row justify-end gap-4'>

                <Link
                    className={`rounded-sm p-2 text-sm text-neutral-50 font-semibold  hover:scale-105 transition-all`}
                    href={'/'}
                >
                    HOME
                </Link>

                <Link
                    className={`rounded-sm p-2 text-sm text-neutral-50 font-semibold  hover:scale-105 transition-all`}
                    href={'/'}
                >
                    COCINA
                </Link>

                <Link
                    className={`rounded-sm p-2 text-sm text-neutral-50 font-semibold  hover:scale-105 transition-all`}
                    href={'/'}
                >
                    POSADA
                </Link>

                <Link
                    className={`rounded-sm p-2 text-sm text-neutral-50 font-semibold  hover:scale-105 transition-all`}
                    href={'/'}
                >
                    APARTAMENTOS
                </Link>

            </nav>

        </div>
    )
}

export default NavBarComponent