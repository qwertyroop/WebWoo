"use client";
import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <div className='dark:bg-white dark:text-black bg-black w-max p-1 flex flex-row mx-auto mt-16 rounded-lg'>
        <Button asChild>
          <Link href="/assets" className=' text-xl font-semibold'>
            Explore Assets
          </Link>
        </Button>
      </div>
      <div className="flex flex-col overflow-hidden">
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
      <div className="container">
        <div className="scroll">
          <div className="RightToLeft text-[#d8d8d11c]">
            <p>Designs Inspirations Tools Typography&nbsp;</p>
            <p>Designs Inspirations Tools Typography&nbsp;</p>
          </div>
          <div className="LeftToRight mt-20 text-[#d8d8d11c]">
            <p>Learning Technologies Converters Development&nbsp;</p>
            <p>Learning Technologies Converters Development&nbsp;</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home