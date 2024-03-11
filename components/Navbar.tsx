"use client"
import * as React from "react"
import Link from "next/link"
import Toggle from "@/components/Toggle"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, Disclosure } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <>
            <header>
                <div className="mx-auto flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block flex flex-row-reverse gap-3" href="/">
                        <span className="sr-only">Home</span>
                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl pt-0.5">
                            WebWoo.
                        </h1>
                        <Avatar className="mx-auto">
                            <AvatarImage src="https://ik.imagekit.io/t6luarqrmc/webwoo/WebWoo-Logo.png?updatedAt=1710099127393" />
                            <AvatarFallback className="font-extrabold p-4">Ww</AvatarFallback>
                        </Avatar>
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                        </nav>
                        <div className=" flex items-center gap-4">
                            <div className="hidden lg:flex sm:gap-4">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <Link href="/about" legacyBehavior passHref >
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    <Button className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black rounded-full font-[sfMed] transition-all'>
                                                        About
                                                    </Button>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link href="/assets/add" legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                <Button className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black rounded-full font-[sfMed] transition-all'>
                                                        Add Asset
                                                    </Button>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                {/* <Toggle /> */}

                            </div>

                            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                                <div className="fixed inset-0 z-10" />
                                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <Link href="/about" legacyBehavior passHref>
                                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                        About
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <Link href="/assets/add" legacyBehavior passHref>
                                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                        Add Asset
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </Dialog.Panel>
                            </Dialog>

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </header >

        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar