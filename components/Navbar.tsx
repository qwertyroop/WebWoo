"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, Disclosure } from "@headlessui/react";
import {
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const formSchema = z.object({
    title: z.string().min(2, {
        message: "Duh! Atleast 2 characters.",

    }).refine(value => value.length >= 2, {
        message: "Looks good!",
        params: { status: 'success' },
    }),
    body: z.string().min(2, {
        message: "Lemme know about the site in detail!",
    }),
    siteLink: z.string().url({
        message: "Check the link again!",
    }),
    email: z.string().email({
        message: "Sure? this is your address?",
    }).optional(),

});


const Navbar = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isDialogOpen, setDialogOpen] = React.useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            body: "",
            siteLink: "",
            email: "",

        },
    })
    // const { toast } = useToast()
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        const response = await fetch('/api/newasset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
            form.reset();
            setDialogOpen(true); // Open the dialog
            setIsSubmitting(false);
        }
    }
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
                    <AlertDialog open={isDialogOpen} onDismiss={() => setDialogOpen(false)} onConfirm={() => setDialogOpen(false)}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Whoopeeeee!</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Thanks for the contribution dude! If you've provided your email then I'll let you know when your asset is added.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction onClick={() => setDialogOpen(false)}>Yeah Sure!</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <div className="flex flex-1 items-center justify-end md:justify-between pt-4">
                        <nav aria-label="Global" className="hidden md:block">
                        </nav>
                        <div className=" flex items-center gap-4">
                            <div className="hidden lg:flex sm:gap-4">
                                <NavigationMenu>
                                    <NavigationMenuList >
                                        <NavigationMenuItem>
                                            <Link href="/about" legacyBehavior passHref >
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    <Button className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black rounded-full font-[sfMed] transition-all w-32 h-12 text-xl'>
                                                        About
                                                    </Button>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Sheet>
                                                <SheetTrigger asChild>
                                                    <Button className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black rounded-full font-[sfMed] transition-all w-40 h-12 text-xl'>
                                                        Add Asset
                                                    </Button>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle>Not an Essay, Just a Few Details!</SheetTitle>
                                                        <SheetDescription>
                                                            Hey there, I'm the developer of WebWoo (solo developer & student), well it took me some time to build this site and I'm glad you're here to contribute to the site by adding your assets.
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                    <br />
                                                    <br />
                                                    <Form {...form}>
                                                        <form onSubmit={form.handleSubmit(onSubmit)}>
                                                            <FormField
                                                                control={form.control}
                                                                name="title"

                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Site Name</FormLabel>
                                                                        <FormControl>
                                                                            <Input placeholder="Avengers Recruitment" {...field} />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <br />
                                                            <FormField
                                                                control={form.control}
                                                                name="body"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>What is the site about?</FormLabel>
                                                                        <FormControl>
                                                                            <Input placeholder="Recruits new avenger or wot?" {...field} />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <br />
                                                            <FormField
                                                                control={form.control}
                                                                name="siteLink"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Link of the site</FormLabel>
                                                                        <FormControl>
                                                                            <Input placeholder="avengers.com? nahh!"{...field} />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <br />
                                                            <FormField
                                                                control={form.control}
                                                                name="email"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Your Email (optional)</FormLabel>
                                                                        <FormControl>
                                                                            <Input placeholder="thor@asgard.com"{...field} />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <br />
                                                            <SheetFooter>
                                                                <Button type="submit" disabled={isSubmitting}>
                                                                    {isSubmitting ? (
                                                                        <div>
                                                                            <div className="flex flex-row gap-3">
                                                                                <div className="w-2 h-2 rounded-full bg-white p-1 animate-bounce [animation-delay:.7s]"></div>
                                                                                <div className="w-2 h-2 rounded-full bg-white p-1 animate-bounce [animation-delay:.3s]"></div>
                                                                                <div className="w-2 h-2 rounded-full bg-white p-1 animate-bounce [animation-delay:.7s]"></div>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        "Submit"
                                                                    )}
                                                                </Button>
                                                            </SheetFooter>
                                                        </form>
                                                    </Form>
                                                </SheetContent>
                                            </Sheet>
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
                                        <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                                    </button>

                                    <NavigationMenu>
                                        <NavigationMenuList className="flex flex-col">
                                            <NavigationMenuItem>
                                                <Link href="/about" legacyBehavior passHref >
                                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                        <Button className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black rounded-full font-[sfMed] transition-all w-96 my-12 mx-auto'>
                                                            About
                                                        </Button>
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <Sheet>
                                                    <SheetTrigger asChild>
                                                        <Button className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black rounded-full font-[sfMed] transition-all w-96 my-12'>
                                                            Add Asset
                                                        </Button>
                                                    </SheetTrigger>
                                                    <SheetContent>
                                                        <SheetHeader>
                                                            <SheetTitle>Not an Essay, Just a Few Details!</SheetTitle>
                                                            <SheetDescription>
                                                                Hey there, I'm the developer of WebWoo (solo developer & student), well it took me some time to build this site and I'm glad you're here to contribute to the site by adding your assets.
                                                            </SheetDescription>
                                                        </SheetHeader>
                                                        <br />
                                                        <br />
                                                        <Form {...form}>
                                                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                                                <FormField
                                                                    control={form.control}
                                                                    name="title"

                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormLabel>Site Name</FormLabel>
                                                                            <FormControl>
                                                                                <Input placeholder="Avengers Recruitment" {...field} />
                                                                            </FormControl>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                                <br />
                                                                <FormField
                                                                    control={form.control}
                                                                    name="body"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormLabel>What is the site about?</FormLabel>
                                                                            <FormControl>
                                                                                <Input placeholder="Recruits new avenger or wot?" {...field} />
                                                                            </FormControl>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                                <br />
                                                                <FormField
                                                                    control={form.control}
                                                                    name="siteLink"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormLabel>Link of the site</FormLabel>
                                                                            <FormControl>
                                                                                <Input placeholder="avengers.com? nahh!"{...field} />
                                                                            </FormControl>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                                <br />
                                                                <FormField
                                                                    control={form.control}
                                                                    name="email"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormLabel>Your Email (optional)</FormLabel>
                                                                            <FormControl>
                                                                                <Input placeholder="thor@asgard.com"{...field} />
                                                                            </FormControl>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                                <br />
                                                                <SheetFooter>
                                                                    <Button type="submit" disabled={isSubmitting}>
                                                                        {isSubmitting ? (
                                                                            <div>
                                                                                <div className="flex flex-row gap-3">
                                                                                    <div className="w-2 h-2 rounded-full bg-white p-1 animate-bounce [animation-delay:.7s]"></div>
                                                                                    <div className="w-2 h-2 rounded-full bg-white p-1 animate-bounce [animation-delay:.3s]"></div>
                                                                                    <div className="w-2 h-2 rounded-full bg-white p-1 animate-bounce [animation-delay:.7s]"></div>
                                                                                </div>
                                                                            </div>
                                                                        ) : (
                                                                            "Submit"
                                                                        )}
                                                                    </Button>
                                                                </SheetFooter>
                                                            </form>
                                                        </Form>
                                                    </SheetContent>
                                                </Sheet>
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