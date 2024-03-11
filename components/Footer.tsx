import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="bg-transparent transition-all duration-100">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center ">
                        <h1 className='text-[#09090b] dark:text-white text-7xl sm:text-8xl lg:text-9xl font-extrabold'>WebWoo.</h1>
                    </div>
                    <div className=''>
                        <ul className="mt-12 flex justify-center gap-6 md:gap-8 flex-col">
                            <li>
                                <h1 className='dark:text-white text-black my-auto px-5 text-lg text-center'>Developed & Curated By
                                    <Link href="https://v-r.vercel.app" className='pl-1 font-extrabold'>
                                        Roopesh
                                    </Link>
                                </h1>
                            </li>
                            <li>
                                <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0 justify-center">

                                    <li>
                                        <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                            aria-label="Twitter" href="https://twitter.com/RoopeshVetcha"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-5 w-5">
                                                <path
                                                    d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                            aria-label="Instagram" href="https://instagram.com/roop.heyy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-5 w-5">
                                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                <path d="M16.5 7.5l0 .01"></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                            aria-label="Github" href="https://github.com/qwertyroop/webwoo" ><svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                                                <path
                                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>

                                </ul>
                            </li>
                        </ul>

                    </div>
                </div >
            </footer >
        </>
    )
}

export default Footer