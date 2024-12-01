import React from 'react'

const BookPage = () => {
    return (
        <section className='flex flex-col gap-40 items-center justify-center text-neutral-50 py-10'>

            <div className='flex flex-col items-center justify-center text-center w-1/5 gap-4'>
                <h2 className='text-3xl text-neutral-50 font-bold'>BOOK A TABLE</h2>
                <p>
                    You may make a reservation any time online or by calling (972) 650 9001 during our hours of operation:
                </p>
            </div>

            <div className='flex flex-col gap-4 items-center justify-center'>
                <h3 className='text-2xl text-neutral-50 font-bold'>Horas de apertura</h3>

                <div className='grid grid-cols-2 gap-x-32 gap-y-2'>

                    <span>Monday</span>
                    <span>7:30 - 21</span>

                    <span>Tuesday</span>
                    <span>7:30 - 21</span>

                    <span>Wenesday</span>
                    <span>7:30 - 21</span>

                    <span>Thursday</span>
                    <span>7:30 - 21</span>

                    <span>Friday</span>
                    <span>7:30 - 21</span>

                    <span>Saturday</span>
                    <span>7:30 - 21</span>

                    <span>Sunday</span>
                    <span>7:30 - 21</span>

                </div>
            </div>

        </section>
    )
}

export default BookPage