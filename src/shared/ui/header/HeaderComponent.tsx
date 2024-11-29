import React from 'react'

interface Props {
    className?: string;
}

const HeaderComponent = ({ className }: Props) => {
    return (
        <header className={`${className}`}>

HOLA

            {/* <Image
                src={'./images/header.webp'}
                alt={'holoo'}
            ></Image> */}

        </header>
    )
}

export default HeaderComponent