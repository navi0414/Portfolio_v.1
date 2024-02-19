import React, { useRef } from "react";
import { Ps2 } from "@/fonts/Fonts";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import ProjectGroups from "./ProjectGroups";

const Projects = () => {
  return (
    <div
      className={`Projects px-40 pb-32 h-[100%] w-[100%] bg-slate-300 ${Ps2.className} `}
    >
      <div
        className={`text-center pt-28 pb-8 text-3xl font-semibold tracking-wide `}
      >
        My Projects
      </div>

      <ProjectGroups />
    </div>
  );
};

export default Projects;
