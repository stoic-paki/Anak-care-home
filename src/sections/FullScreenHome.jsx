import React from "react";
import "./../index.css";
import "./FullScreenHome.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HomeCard from "../components/HomeCards";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(scrollTrigger);
const FullScreenHome = () => {
  useGSAP(() => {
      gsap.from(".left-side", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".left-side",
          start: "top 50%",
        },
        
      });

  });
  return (
    <section className=" full-section py-16 md:py-24 bg-gray-50 align ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
          {/* LEFT SIDE – Heading + Image + Button */}
          <div className=" left-side space-y-8 flex flex-col justify-evenly items-center h-full lg:space-y-10">
            <div className="h-fit">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Provides The Best
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
                Services For You
              </h2>
            </div>

            {/* Large image card (highlighted style) */}
            <div className="adding-padding bg-lime-600 text-white rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between gap-5 items-center h-[70%] w-full md:w-[90%]">
              <div className="p-2 md:p-10 text-center w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Companion Services
                </h3>
                <p className="text-lg md:text-xl opacity-90 mb-6">
                  Serving seniors/older adults with compassion and competence.
                </p>
              </div>

              <div className="relative h-64 md:h-80 w-full md:w-[80%] mx-auto rounded-lg overflow-hidden">
                <img
                  src="/assets/tea.jpg" // ← replace with your companion image
                  alt="Companion Services for seniors"
                  className="absolute inset-0 w-full h-full object-cover border-2 border-white rounded-lg"
                />
                {/* Subtle overlay for text readability if needed */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8 md:p-10 w-full flex justify-center">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `${isActive ? "active" : ""} hero-button bg-white text-lime-600 w-full md:w-50 h-10 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex gap-5 justify-center items-center border-2 border-lime-600`
                  }
                >
                  <p className="h-full flex justify-center items-center">
                    See our Services
                  </p>{" "}
                  <FaArrowRight className="inline h-full" />
                </NavLink>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – 4 Numbered Service Cards */}
          <div className="  h-full flex justify-center items-center">

            <div className="card-wrappers grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 h-[95%] ">
                
         
            {/* Card 01 */}
            <HomeCard
              number="01"
              title="Home Care Services"
              description="Personalized care and support for seniors in the comfort of their own homes."
              imageSrc="/assets/svg/broom.svg"
            />

            {/* Card 02 */}
            <HomeCard
              number="02"
              title=" Home Modifications"
              description=" Keeping your existing residence comfortable and accessible."
              imageSrc="/assets/svg/medal.svg"
            />

            {/* Card 03 */}
                  <HomeCard
              number="03"
              title="Dementia Care"
              description="Specialized support for individuals with dementia, promoting safety and quality of life."
              imageSrc="/assets/svg/brain.svg"
            />
            {/* Card 04 */}
                  <HomeCard
              number="04"
              title="Respite Care"
              description="Temporary relief for primary caregivers, ensuring quality care for loved ones."
              imageSrc="/assets/svg/heart.svg"
            />
   </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FullScreenHome;
