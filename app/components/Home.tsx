"use client";
import React, { useRef } from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import About from "./About/About";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero handleScrollToAbout={scrollToAbout} />
      <About aboutRef={aboutRef} />
      <Features />
    </div>
  );
};

export default Home;
