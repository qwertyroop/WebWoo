import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'

const SocialDrawer = () => {
    return (
        <>
            <Drawer>
                <div  className='dark:bg-black dark:text-white bg-white text-black py-2 px-8 rounded-xl'>

                <DrawerTrigger>Click Me</DrawerTrigger>
                <DrawerContent>
                    
                    <DrawerFooter>
                    <div className="flex justify-evenly my-20">
                        <a href='#' className='text-[#fff] text-4xl font-extrabold hover:text-[#c5c5b7]'>About</a>
                        <a href='#' className='text-[#fff] text-4xl font-extrabold hover:text-[#c5c5b7]'>GitHub</a>
                        <a href='#' className='text-[#fff] text-4xl font-extrabold hover:text-[#c5c5b7]'>Add Asset</a>
                        <a href='#' className='text-[#fff] text-4xl font-extrabold hover:text-[#c5c5b7]'>Support</a>
                        <a href='#' className='text-[#fff] text-4xl font-extrabold hover:text-[#c5c5b7]'>Feedback</a>
                    </div>
                        
                        <DrawerClose>
                            <Button variant="outline" className='mb-5'>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
                </div>
            </Drawer>

        </>
    )
}

export default SocialDrawer