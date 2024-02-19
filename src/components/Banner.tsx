import React from "react";
import { Badge } from "./ui/badge";
import galaxy from "../pages/assets/IvanP.png";
import Image from "next/image";
import { Button } from "./ui/button";
import TypeWriter from "./ui/TypeWriter";
import { Lilita, Ps2 } from "@/fonts/Fonts";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <main className=" flex justify-between items-center h-[80vh] " id="home">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="details w-[60%]"
      >
        <div className=" mb-6 ">
          <Badge className=" p-2 px-5 rounded-sm text-md font-medium tracking-wider bg-primary text-secondary">
            Welcome to My Portfolio
          </Badge>
        </div>
        <div className="title mb-4">
          <h1 className="text-4xl font-extrabold">
            Hi! I&apos;m <br />
            Ivan Paul Soliman
          </h1>
          <span
            className={`typeWrite font-extrabold text-orange-500 ${Ps2.className}`}
          >
            <TypeWriter
              sequences={["Web Developer", 1500, "Frontend Developer", 1500]}
              fontsize="2rem"
            />
          </span>
          <div className="text w-4/5 my-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum
              rem accusamus saepe a maiores accusantium deserunt quas veritatis
              corporis fuga quae quisquam, doloribus molestiae neque sequi
              mollitia iusto commodi!
            </p>
          </div>
        </div>
        <div className="buttonS">
          <Button variant={"roundLine"} className="px-8 mr-2">
            {" "}
            Hire me
          </Button>
          <Button variant={"roundFill"} className="px-8">
            {" "}
            Download CV
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        className="w-[37%] ImageDiv"
      >
        <div className="bg-slate-900 flex justify-center text-secondary  rounded-[15%] Invader max-h-[500px]">
          <Image
            className=" w-[100%] h-[100%]  rounded-[20%]"
            src={galaxy}
            alt="asds"
          ></Image>
        </div>
      </motion.div>
    </main>
  );
};

export default Banner;
