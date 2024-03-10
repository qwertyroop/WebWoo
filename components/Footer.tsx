import React from 'react'
import SocialDrawer from './SocialDrawer'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="dark:bg-white bg-[#09090b] m-8 rounded-2xl">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center ">
                        <h1 className='text-[#09090b] text-9xl font-extrabold'>WebWoo.</h1>
                    </div>
                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        <li>
                            <h1 className='dark:text-black text-white my-auto px-5 text-lg'>Developed & Curated By
                                <Link href="https://v-r.vercel.app" className='pl-1 font-extrabold'>
                                    RoopV
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