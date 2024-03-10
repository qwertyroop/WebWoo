import Navbar from '@/components/Navbar'
import React from 'react'

const notFound = () => {
    return (
        <>
            <div className=' overflow-hidden h-screen'>
                <Navbar />
                <div className="flex h-screen justify-center items-center">
                    
                        <h1 className="lg:text-[20rem] md:text-4xl text-3xl font-bold">404</h1>
                    
                </div>
            </div>
        </>
    )
}

export default notFound