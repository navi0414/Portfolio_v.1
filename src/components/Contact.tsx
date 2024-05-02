import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Ps2 } from "@/fonts/Fonts";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="py-36 px-48 bg-secondary" id="Contact">
      <div className="container flex justify-between">
        <div className="Text w-[40%]">
          <h1 className={`text-orange-500 text-3xl mb-3 ${Ps2.className}`}>
            Let&apos;s Connect
          </h1>
          <p>
            Ready to bring your vision to life? Let&apos;s connect! Whether you
            have a project in mind or just want to say hello, I&apos;d love to
            hear from you. Drop me a line and let&apos;s start making magic
            together.
          </p>
          <div className="Icons text-[40px] flex mt-4">
            <FaGithub className="mr-4" /> <FaLinkedin />
          </div>
        </div>
        <div className={`Forms w-[45%] ${Ps2.className} relative`} ref={ref}>
          <motion.div
            initial={{
              opacity: 1,
            }}
            whileInView={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: 3,
            }}
            className="LogoSvg absolute m-auto w-[100%] h-[100%] stroke-orange-500 stroke-[9px] p-5"
          >
            <svg
              height="100%"
              width="100%"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <style type="text/css"> </style>
                <g>
                  <motion.path
                    initial={{
                      pathLength: 0,
                    }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{
                      duration: 2.5,
                    }}
                    className="st0"
                    d="M255.998,0.002C114.606,0.012,0.01,114.604,0,256c0.01,141.406,114.65,255.328,255.926,255.998h0.334 l0.297-0.009c27.124,0.038,49.507-8.527,64.961-22.594c15.468-14.01,23.727-33.254,23.708-52.736 c0.02-9.148-1.914-18.306-5.521-27.024c6.086-3.464,10.143-6.612,11.301-7.444c4.152-2.957,16-18.766,7.693-31.79 c-8.344-13.014-38.042-42.678-46.152-47.702c-8.086-5.015-21.598-0.124-28.105,9.426c-6.526,9.55-11.674,6.689-11.674,6.689 s-18.516-14.957-44.124-66.621c-25.607-51.694-26.263-75.454-26.263-75.454s0.833-5.847,12.388-5.263 c11.53,0.621,23.598-7.168,24.516-16.66c0.928-9.464-4.698-51.091-10-65.598c-5.316-14.516-25.062-14.65-29.928-13.138 c-4.89,1.502-55.033,13.712-59.014,66.21c-3.966,52.506,9.565,100.18,28.943,139.309c19.387,39.119,49.128,78.765,93.3,107.406 c17.89,11.598,35.058,13.1,49.493,10.67c2.483,5.54,3.718,11.291,3.746,16.985c-0.028,11.292-4.621,22.354-14.066,30.966 c-9.469,8.564-24.071,14.928-45.2,14.967l-0.516,0.009C130.797,481.96,29.387,381.09,29.397,256 c0.01-62.621,25.339-119.186,66.367-160.237c41.053-41.023,97.612-66.354,160.234-66.364c62.621,0.01,119.181,25.34,160.232,66.364 c41.033,41.052,66.354,97.606,66.373,160.237c-0.01,38.67-9.666,74.966-26.698,106.784c-9.531,17.837-21.397,34.23-35.177,48.812 c-5.569,5.905-5.301,15.206,0.594,20.776c5.894,5.578,15.205,5.32,20.784-0.584c15.54-16.46,28.937-34.976,39.712-55.139 C501.071,340.717,512,299.589,512,256C511.98,114.604,397.389,0.012,255.998,0.002z"
                  ></motion.path>
                </g>
              </g>
            </svg>
          </motion.div>

          <motion.form
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 4,
            }}
          >
            <label className={`font-semibold text-[12px] ${Ps2.className}`}>
              Hello
            </label>
            <Input
              type="email"
              placeholder="Email"
              className=" border-primary border-2 mb-4 text-[11px]"
            />
            <label className={`font-semibold text-[12px] ${Ps2.className}`}>
              Subject
            </label>
            <Input
              type="text"
              placeholder="Just saying hi"
              className=" border-primary border-2 mb-4 text-[11px]"
            />
            <label className={`font-semibold text-[12px] ${Ps2.className}`}>
              Message
            </label>
            <Textarea
              placeholder="Lets's talk about..."
              className=" border-primary border-2 mb-6 text-[11px]"
            ></Textarea>
            <Button className="w-[100%] bg-slate-950 text-white btnSend">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
