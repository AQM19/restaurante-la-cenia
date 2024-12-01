import React from 'react'

const GeopositionPage = () => {
    return (
        <article className='bg-orange-100 pt-6 sm:py-0'>

            <div className='flex flex-col-reverse sm:flex-row items-center justify-center gap-4 sm:gap-0 w-full sm:w-5/6 py-0 sm:m-auto text-neutral-900'>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.7997461388063!2d-4.185041023281666!3d43.381211071116184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd49153d6f34c953%3A0x6e39ebc6e2a54ead!2sRestaurante%20La%20Ce%C3%B1a!5e0!3m2!1ses!2ses!4v1733040479132!5m2!1ses!2ses"
                    loading="lazy"
                    className='w-full sm:w-1/2 h-96'
                ></iframe>

                <div className='grid grid-cols-[1.5fr_2fr] w-full sm:w-1/2 gap-2 px-2 sm:px-0 text-pretty'>

                    <b className='text-right'>Estamos en</b> <span>Barrio San Roque, 163c, 39526 Novales, Cantabria</span>
                    <b className='text-right'>Llámanos al</b> <span>+34 000 000 000</span>
                    <b className='text-right'>Escribenos a</b> <span>info@gmail.com</span>
                    <b className='text-right'>Estamos abiertos</b> <span>De lunes a domingo</span>

                </div>

            </div>

        </article>
    )
}

export default GeopositionPage