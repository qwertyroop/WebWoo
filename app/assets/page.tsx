"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import Footer from '@/components/Footer'

const Assets = () => {
    const categories = ['Inspiration', 'Generators', 'UIElements', 'Technologies', 'Animations', 'Channels', 'Extensions', 'Typography']
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 100); // adjust the time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 lg:p-8 md:p-4 p-6">
                {
                    categories.map((category, index) => (
                        <div key={index}>
                            {loaded ? (
                                <Link href={`/assets/${category.toLowerCase()}`}>
                                    <div className="aspect-video rounded-lg dark:bg-[#d0d0c6] bg-[#09090b] flex flex-col items-center justify-center lg:hover:scale-105 sm:hover:scale-95 transition-all ">
                                        <div className="flex items-center justify-center transition-all pb-3">
                                            <h1 className='dark:text-black text-white font-extrabold md:text-6xl text-5xl'>{category}</h1>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <Skeleton className="aspect-video rounded-lg " />
                            )}
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    )
}

export default Assets