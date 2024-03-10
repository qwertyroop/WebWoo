"use client"
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import Postcard from "@/components//Postcard"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

type Post = {
    title: string;
    body: string;
    src: string;
    siteLink: string;
};

const TabsDemo = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <Tabs defaultValue="inspo" className="w-full md:w-xl">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 sticky z-10 top-5">
                <TabsTrigger value="inspo">Inspiration</TabsTrigger>
                <TabsTrigger value="yt">Youtube</TabsTrigger>
                <TabsTrigger value="frameworks">FrameWorks</TabsTrigger>
                <TabsTrigger value="gen">Generators</TabsTrigger>
            </TabsList>
            <TabsContent value="inspo" className="w-full">
                <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <Postcard key={index} title={post.title} body={post.body} src={post.src} siteLink={post.siteLink}/>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="yt">
            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <Postcard key={index} title={post.title} body={post.body} src={post.src} siteLink={post.siteLink}/>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="frameworks">
            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <Postcard key={index} title={post.title} body={post.body} src={post.src} siteLink={post.siteLink}/>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="gen">
            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <Postcard key={index} title={post.title} body={post.body} src={post.src} siteLink={post.siteLink}/>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default TabsDemo