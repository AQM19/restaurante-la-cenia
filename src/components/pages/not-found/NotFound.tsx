import React from 'react'

const NotFound = () => {
    return (
        <div className='h-full flex items-center justify-center'>
            <h1 className='inline-block mr-5 pr-6 text-2xl font-medium align-top next-error-h1 border-r-2'>404</h1>
            <div className='inline-block'>
                <h2 className='text-sm font-normal m-0'>This page could not be found.</h2>
            </div>
        </div>
    )
}

export default NotFound