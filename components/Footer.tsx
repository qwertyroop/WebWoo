import React from 'react'
import SocialDrawer from './SocialDrawer'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="bg-transparent transition-all duration-100">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center ">
                        <h1 className='text-[#09090b] dark:text-white text-7xl sm:text-8xl lg:text-9xl font-extrabold'>WebWoo.</h1>
                    </div>
                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        <li>
                            <h1 className='dark:text-white text-black my-auto px-5 text-lg text-center'>Developed & Curated By
                                <Link href="https://v-r.vercel.app" className='pl-1 font-extrabold'>
                                    Roopesh
                                </Link>
                            </h1>
                        </li>

                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer