import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { FlipWords } from "./ui/flip-words";
import { color } from "framer-motion";

const Hero = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div className="pb-20 pt-36">
      <div>
        <BackgroundBeams className="h-[40rem] w-full" />
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      {/* <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      > */}
      {/* Radial gradient for the container to give a faded look */}
      {/* <div
        // chnage the bg to bg-black-100, so it matches the bg color and will blend in
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      /> */}
      {/* </div> */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="tracking-widest text-xs text-center text-blue-100 max-w-80">
            <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0 md:text-sm">
              Hi There! 👋🏻
              <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0"></span>
            </span>
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <br />

          <div className="text-center text-[40px] md:text-5xl lg:text-6xl text-4xl mx-auto font-space font-bold">
            Build
            <span className="font-style: italic">
              <FlipWords words={words} />{" "}
            </span>
            <br />
            User Interface On The Internet
          </div>
          <br />

          {/* <TextGenerateEffect
            words="Transform Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /> */}

          <p className="text-center md:tracking-wider mb-4 text-lg md:text-lg lg:text-2xl">
            Hi!<span className="text-purple font-bold"> I&apos;m Nikhil</span>,
            a Full Stack Web Developer based in India.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
