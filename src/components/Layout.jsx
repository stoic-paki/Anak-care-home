import React, { useEffect } from "react";
// import App from "../App.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Outlet /> {/* This is where pages (Home, About, etc.) will render */}
      </main>
      <Footer/> {/* Footer is outside the Outlet, so it appears on all pages */}
    </>
  );
};

export default Layout;
