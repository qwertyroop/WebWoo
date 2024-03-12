import Navbar from '@/components/Navbar'
import React, { useLayoutEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Home = () => {

  return (
    <>

      <div className='bg-[#f5f3ef] text-black'>
        <Navbar />
        <Hero />

       
        


        <div className=' w-max flex flex-row mx-auto mt-16 rounded-lg' >
          <Button asChild className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black hover:scale-105 transition-all rounded-full font-semibold w-48 h-14 text-xl'>
            <Link href="/assets" className=' '>
              Explore Assets
            </Link>
          </Button>
        </div>
        <div className="flex flex-col overflow-hidden pb-20">
          <ContainerScroll

            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Handpicked <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Resources
                  </span>
                </h1>
                <div className='mb-10'>

                </div>
              </>
            }
          />
        </div>

        <Footer />
      </div>

    </>
  )
}

export default Home