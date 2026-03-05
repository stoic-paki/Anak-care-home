import React from "react";
import "./ServicesCards.css";
import { NavLink } from "react-router-dom";
const ServicesCards = ({ title, iconPath, description }) => {
  return (
    <div
      className="
      Service_card
        flex flex-col items-center 
        justify-evenly 
        
        gap-5
        w-full 
        md:w-80
        bg-white 
        rounded-2xl 
        p-10 
        shadow-lg 
        border-4 border-lime-600
        transition-all duration-300 
        hover:shadow-xl 
        hover:-translate-y-2 
        hover:border-indigo-200
        text-center
      "
    >
      <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
        <img
          src={iconPath}
          alt={`${title} icon`}
          className="w-16 h-16 mx-auto"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>

      <NavLink
        to="/contact"
        className=" btn mt-6 inline-block hero-button bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors duration-300"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default ServicesCards;
