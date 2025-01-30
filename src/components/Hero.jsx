import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import HeroImage from "../assets/Hero2.png";
import Button from "../other/Button.jsx";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <>
      <motion.div>
        <div className="container mx-auto ">
          <div className="h-16 w-16 bg-indigo-200/20 absolute rounded-full blur-2xl z-789 top- left-1/3" />
          <div className="flex items-center justify-center pb-8 md:h-screen flex-col">
            <div className="px-4 md:px-12 flex justify-center flex-col gap-9 md:pt-18">
              {/* <h2 className=" md:text-5xl md:py-2 bg-gradient-to-r from-green-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent text-center  drop-shadow-xl">
                Undergraduate
              </h2> */}
              <motion.div initial={{y:300, opacity:0}} animate={{y:0, opacity:1}} transition={{}} className="md:flex md:items-center md:gap-12  md:pl-28">
                <img
                  className="rounded-full drop-shadow-2xl shadow-xl mt-20 md:block md:w-[15vw] block opacity-95 border-3 border-blue-400"
                  src={HeroImage}
                  alt="hero"
                />
                <h2 className="md:block hidden  md:p-4 md:rounded-full md:text-lg md:drop-shadow-lg">
                  Hello I am Prashan Kulathunga in Sri Lanaka!
                  <hr className="border-gray-900/50 w-1/2" />
                </h2>
              </motion.div>

              <motion.p initial={{y:300, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className=" text-3xl md:text-8xl font-extrabold md:-mt-6 text-center md:py-4 py-1 drop-shadow-xl text-transparent bg-gradient-to-r from-green-400 to-violet-500 bg-clip-text">
                Software Engineer
                <span className="text-white">|</span>
              </motion.p>

              <motion.div initial={{y:300, opacity:0}} animate={{y:0, opacity:1}} transition={{}} className="flex mx-auto gap-2 flex-col md:flex-row">
                <button className="group hover:bg-sky-600 relative bg-sky-600 rounded text-neutral-50 duration-500 font-medium flex justify-start gap-2 items-center p-2 pr-6 float-center ">
                  <svg
                    className="md:w-4 md:h-4 h-4 w-4 fill-neutral-50"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                  </svg>
                  <span className="border-l-2 px-1 text-xs">
                  <a href="https://www.linkedin.com/in/prashan-kulathunga-673421294/" target="_blank"> Prashan Kulathunga</a>
                  </span>
                  <div className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute">
                    See my profile!
                  </div>
                </button>
                <button class="cursor-pointer text-zinc-200 flex gap-2 items-center hover:bg-black px-4 py-2 rounded-lg font-medium text-xs bg-[#111] transition-all ease-in duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 fill-zinc-200"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                  <a href="https://github.com/prashankulathunga" target="_blank"> Prashan Kulathunga</a>
                </button>
              </motion.div>
              <hr className="border-gray-900" />
              <motion.div initial={{y:300, opacity:0}} animate={{y:0, opacity:1}} transition={{}} className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <p className="-mt-6 col-span-1 md:text-left text-sm md:text-md text-gray-300 bg-gray-900/30 drop-shadow-xl p-4 md:p-6 rounded-xl flex gap-2 items-start transition-all ease-in-out hover:scale-[1.02] duration-500">
                  <CheckCircleIcon className="h-5 w-10 md:h-7 text-blue-400" />
                  Building dynamic, responsive web applications with expertise
                  in front-end and back-end technologies.
                </p>

                <p className=" md:text-left md:-mt-6 col-span-1 text-sm md:text-md text-gray-300 bg-gray-900/30 drop-shadow-xl p-4 md:p-6 rounded-xl flex gap-2 items-start -mt-2 transition-all ease-in-out hover:scale-[1.02] duration-500">
                  <CheckCircleIcon className="h-5 w-17 md:h-7 text-blue-400" />
                  I'm a passionate Software Engineer dedicated to creating
                  engaging and user centric websites with a deep focus on
                  delivering intuitive and innovative digital experiences
                </p>
              </motion.div>

              <div className="md:block hidden mt-3">
                {/* <Card text="Hello" /> */}
                <Button title="Send WhatsApp" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
