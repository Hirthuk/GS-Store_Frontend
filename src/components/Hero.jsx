import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col sm:flex-row border border-gray-500'>
            <div className='flex flex-col  w-full sm:w-1/2 justify-center items-center py-10 sm:py-0'>
                <div className='flex flex-col  gap-3 '>
                    <div className='flex items-center gap-2'>
                        <p className='border-none bg-gray-950 h-[3px] w-8 md:w-16'></p>
                        <h1 className='font-semibold font-sans'>THE BEST PRODUCTS</h1>
                    </div>
                    <h1>New Arrivals</h1>
                    <div className='flex gap-2 items-center'>
                        <h1 className='font-bold'>SHOP NOW</h1>
                        <p className='border-none bg-gray-950 h-[1.5px] w-8 md:w-16'></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
