import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Ps2 } from "../fonts/Fonts";
import { Pops } from "../fonts/Fonts";
import Project1 from "@/pages/assets/project1.png";
import { Button } from "./ui/button";
import { Fade, Slide } from "react-awesome-reveal";
import InvoiceImg from "@/pages/assets/Invoice.png";

const ProjectGroups = () => {
  return (
    <div className="h-[100%]">
      <div className={`ProjectCol ${Pops.className} grid grid-cols-1 gap-10 `}>
        <div className="ProjectGroup flex items-center justify-between my-8 mb-20 h-[100%]">
          <Fade
            className="imgHolder min-h-[400px] min-w-[400px] rounded-t-sm overflow-hidden flex p-8 bg-orange-300"
            direction="right"
            duration={1000}
            triggerOnce={true}
          >
            <div>
              <Image
                src={InvoiceImg}
                alt="project1"
                className="w-[100%] h-[100%] hover:scale-105 transition duration-500 ease-in-out rounded-sm"
              />
            </div>
          </Fade>

          <div className="flex-1 px-10">
            <Fade cascade damping={0.2} direction="left" triggerOnce={true}>
              <h1 className={`text-4xl mb-6 ${Ps2.className}`}>
                Invoice Generator
              </h1>

              <p>
                A seamless solution tailored for efficiency and convenience.
                With simple design and automated processes, creating invoices
                with ease. (using Next.js, Tailwind CSS, and shadcn).
              </p>

              <div>
                <Button className=" mt-4 bg-orange-400 hover:bg-orange-500 text-primary px-11">
                  See Demo
                </Button>
              </div>
            </Fade>
          </div>
        </div>
        {/* <div className="ProjectGroup flex flex-row-reverse items-center justify-between my-16 mb-20 h-[100%]">
          <Fade
            className="imgHolder min-h-[400px] min-w-[400px] rounded-t-sm overflow-hidden flex p-8 bg-orange-300"
            direction="left"
            duration={1000}
            triggerOnce={true}
          >
            <Image
              src={Project1}
              alt="project1"
              className="w-[100%] h-[100%] hover:scale-105 transition duration-500 ease-in-out rounded-sm"
            />
          </Fade>

          <div className="flex-1 px-10">
            <Fade cascade damping={0.2} direction="right" triggerOnce={true}>
              <h1 className={`text-4xl mb-6 ${Ps2.className}`}>
                Project Title
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolores dolorem voluptate eveniet numquam hic
              </p>

              <div>
                <Button className=" mt-4 bg-orange-400 hover:bg-orange-500 text-primary px-11">
                  See Demo
                </Button>
              </div>
            </Fade>
          </div>
        </div>
        <div className="ProjectGroup flex items-center justify-between my-16 mb-20 h-[100%]">
          <Fade
            className="imgHolder min-h-[400px] min-w-[400px] rounded-t-sm overflow-hidden flex p-8 bg-orange-300"
            direction="right"
            duration={1000}
            triggerOnce={true}
          >
            <div>
              <Image
                src={Project1}
                alt="project1"
                className="w-[100%] h-[100%] hover:scale-105 transition duration-500 ease-in-out rounded-sm"
              />
            </div>
          </Fade>

          <div className="flex-1 px-10">
            <Fade cascade damping={0.2} direction="left" triggerOnce={true}>
              <h1 className={`text-4xl mb-6 ${Ps2.className}`}>
                Invoice Generator
              </h1>

              <p>
                A seamless solution tailored for efficiency and convenience.
                With simple design and automated processes, creating invoices
                with ease. (using Next.js, Tailwind CSS, and shadcn).
              </p>

              <div>
                <Button className=" mt-4 bg-orange-400 hover:bg-orange-500 text-primary px-11">
                  See Demo
                </Button>
              </div>
            </Fade>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectGroups;
