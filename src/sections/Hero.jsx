import React from "react";
import "./Hero.css";
import heroBg from "./hero-section.jpg"; // adjust path relative to Hero.jsx
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-content', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1})
    }, [])

  return (
    <section
      className="flex items-center h-screen hero-section justify-start]"
      style={{ background: `url(${heroBg}) no-repeat center center / cover` }}
    >
      <div className="hero-content flex flex-col justify-evenly h-full">
        <div className="company-name text-white text-2xl font-sans w-fit ">
          <h1>Anak Carehome</h1>
        </div>
        <div className="hero-headings flex flex-col gap-10">
          <h1 className="hero-title text-4xl md:font-normal text-white">
            Welcome to Our Care Home
          </h1>
          <p className="hero-subtitle text-4xl text-white flex items-baseline gap-3 flex-wrap ">
            We provide
            <span className="typewriter-text inline text-4xl text-lime-600 w-full md:w-auto">
              <Typewriter
                options={{
                  strings: [
                    "Hygiene",
                    "Companionship",
                    "Care",
                    "Support",
                    "Comfort",
                    "Dignity",
                    "Respect",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
        </div>
        <div className="hero-buttons flex flex-col md:w-full md:flex-row gap-5  ">
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? "active" : ""} hero-button bg-lime-600 text-white w-full md:w-50 h-10 rounded-lg hover:bg-lime-700 transition-colors duration-300 flex gap-5 justify-center items-center border-2 border-white`}
          >
            <p className="h-full flex justify-center items-center">About Us</p> <FaArrowRight className="inline h-full" />
          </NavLink>
          <a
           href="#learn"
            className={`hero-button bg-white text-lime-600 w-full md:w-50 h-10 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex gap-5 justify-center items-center border-2 border-lime-600`}
          >
            <p className="h-full  flex justify-center items-center">Experience</p> <FaArrowRight className="inline h-full" />
          </a>
        </div>
      </div>
    </section>

  );
};

export default Hero;
