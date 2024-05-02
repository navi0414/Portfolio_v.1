import React, { useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Skills from "./Skills";
import Image from "next/image";
import Education from "./Education";
import Certificate from "./Certificate";
import { Ps2 } from "@/fonts/Fonts";
import html from "../pages/assets/html.png";
import css from "@/pages/assets/css.png";
import php from "@/pages/assets/php.png";
import tailwind from "@/pages/assets/tailwind.png";
import javascript from "@/pages/assets/javascript.png";
import typescript from "@/pages/assets/typescript.png";
import react from "@/pages/assets/react.png";
import next from "@/pages/assets/next.png";
import aboutPic2 from "@/pages/assets/aboutPic2.jpg";
import { motion, useInView } from "framer-motion";
import { Span } from "next/dist/trace";

const About = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -250,
        y: isInView ? 0 : 150,
        transition: "1s ease",
      }}
      className="h-[100%] py-36 px-48 "
      id="aboutsection"
    >
      <div className="container flex justify-between items-center">
        <div className="imagePlaceHolder flex justify-center items bg-slate-400 h-[500px] w-[25%] rounded-tl-[10%] rounded-br-[10%] overflow-hidden">
          <Image
            src={aboutPic2}
            alt="navi"
            className=" w-[100%] h-[100%] object-cover"
          ></Image>
        </div>
        <div className="aboutText text-left h-[100%] w-[65%] ">
          <h1
            className={`Title text-4xl tracking-wide font-semibold my-12 animate-bounce ${Ps2.className}`}
          >
            <span className="text-orange-500">About</span> Me
          </h1>
          <p className="mb-6">
            Hi there! I&apos;m <span className=" text-orange-500">Ivan</span>, a
            passionate <span className=" text-orange-500">Frontend </span>
            Developer dedicated to bringing ideas to life through design. With a
            keen eye for detail and a love for creativity, I thrive on turning
            concepts into captivating visuals. Let&apos;s collaborate and make
            something amazing together!
          </p>
          <div>
            <Tabs defaultValue="skills">
              <TabsList
                className={`grid w-[100%] grid-cols-3 mb-10  m-auto ${Ps2.className}`}
              >
                <TabsTrigger value="skills" className="Tabs text-[0.8rem]">
                  Skills
                </TabsTrigger>
                <TabsTrigger value="educ" className="Tabs text-[0.8rem]">
                  Education
                </TabsTrigger>
                <TabsTrigger value="cert" className="Tabs text-[0.8rem]">
                  Certificate
                </TabsTrigger>
              </TabsList>
              <TabsContent value="skills">
                <Skills />
              </TabsContent>
              <TabsContent value="educ">
                <Education />
              </TabsContent>
              <TabsContent value="cert">
                <Certificate />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <motion.div className="Logos flex flex-wrap justify-center items-center w-[100%] h-[10%]  p-14 m-auto   px-40">
        <div className=" h-16 w-16 p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={html} alt="html" />
        </div>
        <div className=" h-16 w-16 p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={css} alt="html" />
        </div>
        <div className=" h-16 w-16 p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={tailwind} alt="html" />
        </div>
        <div className=" h-16 w-16 p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={javascript} alt="html" />
        </div>
        <div className=" h-16 w-16 p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={typescript} alt="html" />
        </div>
        <div className=" h-16 w-16 p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={php} alt="html" />
        </div>
        <div className=" h-16 w-16 p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={react} alt="html" />
        </div>
        <div className=" h-16 w-16 neXt p-2 mx-2 shadow-gray-500 shadow-sm rounded-md">
          <Image src={next} alt="html" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
