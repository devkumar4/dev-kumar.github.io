// Add these imports if not already included
import { useEffect } from "react";
import { useRouter } from "next/router";
import { WavyBackground } from "../components/ui/wavy-background";

import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesCore } from "../components/ui/sparkles";
import { Button } from "../components/ui/moving-border";

const handleScroll = () => {
  const section = document.getElementById("target-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Target section not found");
  }
};

export function WavyBackgroundDemo() {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      const button = document.getElementById("scroll-button");
      if (button) button.classList.remove("hidden");
    } else {
      const button = document.getElementById("scroll-button");
      if (button) button.classList.add("hidden");
    }
  };

  return (
    <div className="relative overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Transforming Ideas into Digital Masterpieces
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Hi, I&apos;m{" "}
          <span className="font-bold text-2xl px-1 underline">Dev Kumar</span>,
          a passionate software engineer with a robust foundation in both
          frontend and backend development. With a knack for solving complex
          challenges and a drive to innovate, I specialize in creating scalable,
          high-quality software solutions. Let&apos;s build something amazing
          together!
        </p>
      </WavyBackground>
      <div className="cursor-pointer absolute bottom-10 w-full flex justify-center items-center mt-20">
        <div
          id="scroll-button"
          className="w-[35px] h-[64px] rounded-3xl border-4  flex justify-center items-start p-2"
          onClick={handleScroll}
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-white mb-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl  font-bold text-center text-white relative z-20">
        Experience
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        <h1 className="flex justify-center font-bold text-lg mt-[1px] opacity-100">
          6 months of industrial experience complemented by over 2 years of
          pertinent professional expertise
        </h1>
        <p className="flex justify-center font-bold text-sm mt-[-100px] opacity-100">
          Software Developer Intern • March 2023 - October 2023
        </p>
        <Link
          href="https://clingmultisolutions.org"
          className="flex justify-center font-bold text-2xl mt-[-70px] "
        >
          Cling multi Solutions Pvt Ltd.
        </Link>
      </div>
    </div>
  );
}

export function GridBackgroundDemo() {
  return (
    <div>
      <div className="min-h-screen bg-black relative flex flex-col justify-between">
        <div className="absolute inset-0 "></div>

        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white text-center mb-[150px]">
            Resume
          </h1>
          <MovingBorderDemo />
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-30px]">
        <div className="py-4 bg-black text-white text-center text-sm cursor-pointer absolute">
          Made with <span className="text-red-600">♥</span> by{" "}
          <span
            className="cursor-pointer hover:text-red-700 underline"
            onClick={() => console.log("hello")}
          >
            Dev Kumar
          </span>
        </div>
      </div>
    </div>
  );
}

export function MovingBorderDemo() {
  return (
    <div className="flex justify-center items-center">
      <Button
        borderRadius="1.75rem"
        className="bg-black  text-white  border-neutral-700 dark:border-slate-800"
      >
        <span
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1w347JlKdsMJy-GFJ2AoLFwZfUjOa-YkZ/view"
            )
          }
        >
          Resume
        </span>
      </Button>
    </div>
  );
}
