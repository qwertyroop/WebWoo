import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
    const words = `Designers & Developers`;
    return (
        <>
            <h1 className="scroll-m-20 mt-32 text-6xl max-w-7xl font-extrabold tracking-tight lg:text-8xl text-center mx-auto uppercase">assets For Web
                <span><TextGenerateEffect words={words} /></span>
            </h1>
        </>
    )
}

export default Hero