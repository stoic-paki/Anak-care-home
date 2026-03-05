import React from "react";
import "./../sections/FullScreenHome.css";

const HomeCard = ({ number, title, description, imageSrc }) => {
  return (
    <div
      className="
      group bg-white rounded-2xl shadow-md overflow-hidden 
      hover:shadow-2xl hover:scale-[1.01] transition-all duration-300
      border border-gray-100 flex flex-col gap-5
    "
    >
      {/* Image + Number Overlay */}
      <div className=" relative h-48 md:h-50 lg:h-60 flex items-center justify-center bg-lime-600/10">
        {/* Image */}
        <div className="rounded-lg img-wrapper h-full w-[90%] flex justify-center items-center relative">
        <img
          src={imageSrc}
          alt={title}
          className="absolute w-[80%] h-[80%] object-contain"
        />
        </div>

        {/* Number badge with blur background */}
        <div
          className="
          the-number absolute top-4 left-4 z-10
          bg-white/30 backdrop-blur-md 
          text-lime-700 font-bold text-2xl md:text-2xl lg:text-2xl
          w-5 h-5 md:w-10 md:h-10 lg:w-14 lg:h-14
          rounded-full flex items-center justify-center
          shadow-lg border border-white/40
        "
        >
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10 adding-padding-cards text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
          {title}
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
