import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Head from "next/head"; 
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebWoo",
  description: "Discover an extensive collection of handpicked resources for web designers and developers at WebWoo. From tools and templates to tutorials and tips, find everything you need to enhance your web projects and streamline your workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>WebWoo</title>
        <meta name="description" content="Discover an extensive collection of handpicked resources for web designers and developers at WebWoo. From tools and templates to tutorials and tips, find everything you need to enhance your web projects and streamline your workflow."/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webwoo.vercel.app" />
        <meta property="og:title" content="WebWoo --Assets for Web Designers and Web Developers" />
        <meta property="og:description" content="Discover an extensive collection of handpicked resources for web designers and developers at WebWoo. From tools and templates to tutorials and tips, find everything you need to enhance your web projects and streamline your workflow. Explore our curated selection and take your web development journey to new heights with WebWoo." />
        <meta property="og:image" content="https://ik.imagekit.io/t6luarqrmc/webwoo/share_banner.png?updatedAt=1710098102539" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/RoopeshVetcha" />
        <meta property="twitter:title" content="WebWoo --Assets for Web Designers and Web Developers" />
        <meta property="twitter:description" content="Discover an extensive collection of handpicked resources for web designers and developers at WebWoo. From tools and templates to tutorials and tips, find everything you need to enhance your web projects and streamline your workflow. Explore our curated selection and take your web development journey to new heights with WebWoo." />
        <meta property="twitter:image" content="https://ik.imagekit.io/t6luarqrmc/webwoo/share_banner.png?updatedAt=1710098102539" />

      </Head>
      <body className='font-[sfReg]'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
