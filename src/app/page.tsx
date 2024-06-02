"use client";
import React from "react";
import { AboutMeSection } from "./Aboutme";
import { GridBackgroundDemo, WavyBackgroundDemo } from "./Background";
import { MeteorsDemo } from "./WorkExperience";

import { InfiniteMovingCardsDemo } from "./Skills";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div
      style={{
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        scrollSnapType: "y mandatory",
        overflowY: "visible",
        height: "100vh",
        scrollBehavior: "smooth",
        perspective: "1px",

        overflowX: "hidden",
      }}
    >
      <Navbar />
      <section
        style={{
          height: "100vh",
          display: "flex,",
          justifyContent: "center",
          alignItems: "center",

          scrollSnapAlign: "start",
        }}
      >
        <WavyBackgroundDemo />
      </section>
      <section
        style={{
          height: "100vh",
          display: "flex,",
          justifyContent: "center",
          alignItems: "center",

          scrollSnapAlign: "start",
        }}
      >
        <AboutMeSection />
      </section>
      <section
        style={{
          height: "100vh",
          display: "flex,",
          justifyContent: "center",
          alignItems: "center",

          scrollSnapAlign: "start",
        }}
      >
        <MeteorsDemo />
      </section>{" "}
      <section
        style={{
          height: "100vh",
          display: "flex,",
          justifyContent: "center",
          alignItems: "center",

          scrollSnapAlign: "start",
        }}
      >
        <InfiniteMovingCardsDemo />
      </section>{" "}
      <section
        style={{
          height: "100vh",
          display: "flex,",
          justifyContent: "center",
          alignItems: "center",

          scrollSnapAlign: "start",
        }}
      >
        <GridBackgroundDemo />
      </section>
    </div>
  );
}
