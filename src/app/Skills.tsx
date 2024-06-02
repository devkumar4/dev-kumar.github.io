"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="md:text-7xl text-3xl  font-bold text-center text-white relative z-20 mt-[-50px]">
        Skills
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "https://img.icons8.com/color/96/null/javascript--v1.png",
    name: "Javascript",
  },
  {
    image: "https://img.icons8.com/color/96/null/typescript.png",
    name: "Typescript",
  },
  {
    image: "https://img.icons8.com/color/96/null/html-5--v1.png",
    name: "HTML",
  },
  {
    image: "https://img.icons8.com/color/96/null/css3.png",
    name: "CSS",
  },
  {
    image: "https://www.svgrepo.com/show/452091/python.svg",
    name: "Python",
  },
  {
    image: "https://img.icons8.com/color/96/null/react-native.png",
    name: "React",
  },
  {
    image: "https://img.icons8.com/color/96/null/react-native.png",
    name: "Nextjs",
  },
  {
    image: "https://img.icons8.com/color/96/null/mongodb.png",
    name: "MongoDB",
  },
  {
    image: "https://img.icons8.com/color/96/null/nodejs.png",
    name: "Nodejs",
  },
  {
    image: "https://img.icons8.com/color/96/null/git.png",
    name: "Git",
  },
  {
    image: "https://www.svgrepo.com/show/354200/postgresql.svg",
    name: "PostgreSQL",
  },
  {
    image: "https://www.svgrepo.com/show/373776/light-prisma.svg",
    name: "Prisma",
  },
];
