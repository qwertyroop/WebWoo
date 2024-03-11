"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"

export const ContainerScroll = ({
  titleComponent,
}: {

  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);


  return (
    <div
      className="h-[60rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}

        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};


type Post = {
  title: string;
  body: string;
  src: string;
  siteLink: string;
  category: string;
  logoLink: string;
};

export const Card = ({
  rotate,
  scale,
  translate,

}: {
  rotate: any;
  scale: any;
  translate: any;

}) => {

  const [postsInspo, setpostsInspo] = useState<Post[]>([]);
  const [postsGen, setpostsGen] = useState<Post[]>([]);
  const [loaded, setLoaded] = useState(false);
    useEffect(() => {
    fetch('/api/inspiration')
      .then(response => response.json())
      .then(data => {
        setpostsInspo(data);
      });
  }, []);

  useEffect(() => {
    fetch('/api/generators')
      .then(response => response.json())
      .then(data => {
        setpostsGen(data);
      });
  }, []);

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-[#09090d] h-full w-full rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 overflow-hidden p-12">
        {postsInspo.map((post, index) => (
          <motion.div
            key={index}
            className=" rounded-md cursor-pointer relative aspect-video w-full"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            {!loaded && <Skeleton className=" aspect-video rounded-xl" />}
            <img src={post.src} alt="Site Image" className="aspect-video rounded-xl" onLoad={() => setLoaded(true)} />
            <div className="text-white p-2">{post.title}</div>

          </motion.div>
        ))}
        {postsGen.map((post, index) => (
          <motion.div
            key={index}
            className=" rounded-md cursor-pointer relative aspect-video w-full"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            <img src={post.src} alt="Site Image" className="aspect-video" />
            <div className="text-white p-2">{post.title}</div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
