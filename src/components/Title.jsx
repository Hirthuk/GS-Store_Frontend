import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <section className='inline-flex items-center text-center gap-2'>
            <h1 className='text-gray-400'>{text1} <span className='text-gray-900'>{text2}</span></h1>
            <p className='hidden h-[2.5px] md:block w-8 lg:w-14 bg-black '></p>

        </section>
    )
}

export default Title
