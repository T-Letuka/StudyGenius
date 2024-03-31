"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import About from "./About/About";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Features />
    </div>
  );
};

export default Home;
