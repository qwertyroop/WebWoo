"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    src: z.string().url({
        message: "Check the link again!",
    }),
    siteLink: z.string().url({
        message: "Check the link again!",
    }),
    category: z.string().min(2, {
        message: "Duh! Atleast 2 characters.",
    }),
    logoLink: z.string().url({
        message: "Check the link again!",
    }),

});


const seed = () => {
    const [message, setMessage] = useState("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            body: "",
            src: "",
            siteLink: "",
            category: "UI Elements",
            logoLink: "",

        },
    })
    const { toast } = useToast()
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setMessage("Loading...")
        const response = await fetch('/api/seeder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
            form.reset();
            toast({
                title: "Hurray! 🎉",
                description: "Thanks for the contribution!",
            })
            setMessage("")
        }
    }

    return (
        <>
            <div className=" h-screen">
                <Navbar />
                <h1 className="text-center text-xl">{message}</h1>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="h-auto lg:w-[50%] w-full">
                        <div className="dark:bg-white bg-black dark:text-black text-white m-8 rounded-lg p-8 lg:h-[80%]">
                            <Avatar className="mx-auto h-32 w-32">
                                <AvatarImage src="https://ik.imagekit.io/t6luarqrmc/logo_reevolve.png?updatedAt=1709480105155" />
                                <AvatarFallback className="font-extrabold p-4">Ww</AvatarFallback>
                            </Avatar>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-black text-center mt-5">
                                Contributing? Thanks! 🎉
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-black text-center">
                                Hey there, I&apos;m the developer of WebWoo (solo developer &amp; student), well it took me some time to build this site and I&apos;m glad you&apos;re here to contribute to the site by adding your assets. I&apos;m really grateful for your contribution. I hope you have a great time contributing to the site. If you have any questions or need help, feel free to reach out to me on Twitter or GitHub. I&apos;m always here to help you. Thanks again for your contribution. 🎉
                            </p>
                        </div>
                    </div>
                    <div className="h-screen overflow-scroll">

                        <div className="flex flex-col h-full sm:m-5 m-5 justify-start">

                            <div className="flex items-center justify-center max-h-screen overflow-hidden">

                                <Form {...form}>

                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto max-w-screen-lg w-screen sm:m-5 md:m-5">
                                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-white text-center mt-5">
                                            Not an Essay, Just a Few Details!
                                        </h1>
                                        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-white text-center">
                                            Details of the site will be saved into the Database and I check myself if the site is worthy to be added to WebWoo. If the site is worthy, it will be added. Thanks for your contribution. If you want to be notified about the contribution provide the email below🎉
                                        </p>
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
                                        <FormField
                                            control={form.control}
                                            name="src"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>imagekit</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="avengers.com? nahh!"{...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="siteLink"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>site link</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="category"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>category</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="logoLink"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>logo</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="flex flex-row justify-between">

                                            <Button asChild variant={"secondary"}
                                            >
                                                <Link href="/">
                                                    Go Back
                                                </Link>
                                            </Button>
                                            <Button
                                                type="submit">Submit</Button>
                                        </div>
                                    </form>
                                </Form>
                            </div >
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default seed
