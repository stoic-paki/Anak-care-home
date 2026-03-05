import React from "react";
import "./MainService.css";
import { useMediaQuery } from "react-responsive";
import MainServiceMobile from "./MainService Folder for reactives/MainServiceMobile.jsx";
import MainServiceDesktop from "./MainService Folder for reactives/MainServiceDesktop.jsx";
import MainServiceTablet from "./MainService Folder for reactives/MainServiceTablet.jsx";

const MainService = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return isMobile ? <MainServiceMobile /> : isTablet ? <MainServiceTablet /> : <MainServiceDesktop />;
};

export default MainService;