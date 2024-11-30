import React from 'react'
import Image from 'next/image';

const OwnerPage = () => {
    return (
        <article className='flex flex-col-reverse sm:flex-row items-center justify-evenly gap-4 sm:gap-10 pt-6 sm:pt-0 px-4 bg-orange-100 sm:m-auto text-neutral-900'>

            <Image src={'/images/jefe.png'} alt={''} width={400} height={400} />

            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 gap-4'>
                <h2 className='text-2xl font-semibold uppercase'>
                    El Jefe
                </h2>

                <p className='text-pretty text-justify sm:text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec feugiat arcu.
                    Cras suscipit neque ut metus convallis, eu commodo magna tempus. Fusce vel nibh at purus malesuada cursus.
                    Nullam volutpat finibus volutpat. Pellentesque sollicitudin risus eu maximus eleifend.
                    Maecenas porta dignissim arcu nec pulvinar. Sed auctor feugiat ipsum eu feugiat.
                    Aliquam imperdiet auctor eleifend. Ut sed consequat quam, consectetur hendrerit neque.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ornare et orci in ultrices.
                    Fusce vitae justo sed lectus blandit ultricies nec in turpis.
                </p>
            </div>

        </article>
    )
}

export default OwnerPage