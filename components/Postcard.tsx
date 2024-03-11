import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import Image from "next/image"

interface PostcardProps {
  title: string;
  body: string;
  src: string;
  siteLink: string;
  category: string;
  logoLink: string;
}

import { Skeleton } from "@/components/ui/skeleton"


const CardWithForm: React.FC<PostcardProps> = ({ title, body, src, siteLink, category, logoLink }) => {
  const [loaded, setLoaded] = useState(false);

  return (

    <Card className="">
      <CardContent>
        <Dialog>
          <DialogTrigger>
            <Image src={src} alt="" width={1906} height={917} loading="lazy" className="object-cover rounded-lg" />

          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="flex flex-row gap-5">
                  <Avatar className=" h-12 w-12">
                    <AvatarImage src={logoLink} />
                    <AvatarFallback className="font-extrabold p-4">Ww</AvatarFallback>
                  </Avatar>
                  <h1 className="scroll-m-20 text-3xl font-semibold text-black tracking-tight lg:text-5xl ">
                    {title}
                  </h1>

                </div>
              </DialogTitle>
              <DialogDescription className="flex flex-col">
                <div className="flex lg:flex-row justify-between flex-col">
                  <Image src={src} width={1906} height={917} alt="" className="my-5 rounded-lg lg:max-w-md lg:h-58 max-h-64 " />
                  <div>
                    <div className="p-4 pl-8 lg:text-lg text-black">
                      <p className="mb-10 mt-1">{body}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <Table>

                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Category</TableHead>
                          <TableHead className="text-right">Tags</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">{category}</TableCell>
                          <TableCell className="text-right">Frontend</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium"></TableCell>
                          <TableCell className="text-right">Library</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium"></TableCell>
                          <TableCell className="text-right">Animation</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </div>
              </DialogDescription>
              <div className="flex flex-row justify-center ">
                {/* <Button asChild className="mx-auto mt-5">
                  <Link href={siteLink}>Visit</Link>
                </Button> */}
                <Button asChild className='bg-[#d1d4ff] text-black hover:bg-[#d1d4ff] hover:text-black  rounded-full p-4 mt-5 uppercase'>
                  <Link href={siteLink} className='text-lg font-semibold'>
                  Visit Site
                  </Link>
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>

      </CardContent>
      <CardFooter className="flex flex-col items-start ml-2">
        <CardTitle className="mb-1 -mt-2 flex flex-row gap-3">
          <div>
            <Avatar className="mx-auto h-4 w-4">
              <AvatarImage src={logoLink} />
              <AvatarFallback className="font-extrabold p-4">Ww</AvatarFallback>
            </Avatar>
          </div>
          <div>

            {title}
          </div>
        </CardTitle>

      </CardFooter>
    </Card>
  )
}

export default CardWithForm
