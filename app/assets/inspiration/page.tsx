"use client"
import { useState, useEffect } from 'react'
import Toggle from '@/components/Toggle'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Postcard from "@/components/Postcard"
import Footer from '@/components/Footer'

type Post = {
    title: string;
    body: string;
    src: string;
    siteLink: string;
    category: string;
    logoLink: string;
};

const page = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/api/inspiration')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <header>
                <div className="flex flex-col sm:flex-row h-16 sm:h-16 max-w-screen px-4 sm:px-6 lg:px-8 justify-between">
                    <a className="block my-auto" href="/">
                        <span className="sr-only">Home</span>
                        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                            WebWoo.
                        </h1>
                    </a>

                    <div className='my-auto'>

                    </div>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        <div className="sm:flex sm:gap-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/assets">Assets</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/assets/tools">Inspiration</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                    </div>
                </div>
            </header>
            <div>
                <main>
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-10 sm:mt-8 h-auto">
                        <div className="py-8">
                            <div className="h-auto">
                                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    {
                                        posts.map((post, index) => (
                                            <Postcard
                                                key={index}
                                                title={post.title}
                                                body={post.body}
                                                src={`/api/generators?url=${encodeURIComponent(post.src)}`}
                                                siteLink={post.siteLink}
                                                category={post.category}
                                                logoLink={post.logoLink}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


            </div>
            <Footer />

        </>
    )
}

export default page