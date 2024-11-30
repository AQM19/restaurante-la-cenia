import React from 'react'

interface Props {
    className?: string;
}

const FooterComponent = ({ className }: Props) => {
    return (
        <footer className={`${className}`}>
            FOOTER
        </footer>
    )
}

export default FooterComponent