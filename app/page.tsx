import Navbar from '@/components/Navbar'
import React, { useLayoutEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';



const Home = () => {

  return (
    <>

      <div className='bg-[#f5f3ef] text-black'>
        <Navbar />
        <Hero />
        <div className=' w-max flex flex-row mx-auto mt-16 rounded-lg' >
          <Button asChild className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black hover:scale-105 transition-all rounded-full p-4'>
            <Link href="/assets" className='text-xl font-semibold'>
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
        {/* <div className="container bg-transparent">
          <div className="scroll">
            <div className="RightToLeft text-[#d8d8d19a]">
              <p>Designs Inspirations Tools Typography&nbsp;</p>
              <p>Designs Inspirations Tools Typography&nbsp;</p>
            </div>
            <div className="LeftToRight mt-20 text-[#d8d8d19a]">
              <p>Learning Technologies Converters Development&nbsp;</p>
              <p>Learning Technologies Converters Development&nbsp;</p>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>

    </>
  )
}

export default Home