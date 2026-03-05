import React from 'react'
import ServicesCards from "../../components/ServicesCards";
import "../MainService.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesData from "../../data/data.js";


const MainServiceTablet = () => {
      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
  <section className="main-service flex flex-col justify-center items-center bg-neutral-100 h-full w-full gap-1">
        <h1 className="text-2xl font-bold text-center mb-6 px-4">
          We'll Provide the Following Services:
        </h1>
        <div className=" services-slider-wrapper w-[90%] cards-parent ">
          <Slider {...settings}>
            {servicesData.map((service, index) => (
              <div key={index} className="the-card">
                <ServicesCards
                  title={service.title}
                  iconPath={service.imageSrc}
                  description={service.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
  )
}

export default MainServiceTablet
