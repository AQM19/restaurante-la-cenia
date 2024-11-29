import React from 'react'
import Image from 'next/image'

interface Props {
    className?: string;
}

const HeaderComponent = ({ className }: Props) => {
    return (
        <header className={`${className}`}>

            <Image
                src={'./header.jpg'}
                alt={'holoo'}
                width={30}
                height={30}
            ></Image>

        </header>
    )
}

export default HeaderComponent