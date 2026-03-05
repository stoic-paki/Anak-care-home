import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Header.css";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(false);

  // Ref for mobile menu
  const menuRef = useRef(null);
  // Ref for the entire navbar (for scroll hide/show)
  const navRef = useRef(null);

  // Mobile menu animation (unchanged)
  useGSAP(
    () => {
      if (!menuRef.current || !isMobile) return;

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" },
      );

      tl.fromTo(
        ".mobile-link",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4",
      );

      if (menuOpen) {
        tl.play();
      } else {
        tl.reverse(0); // reverse to start
      }
    },
    { dependencies: [menuOpen, isMobile], scope: menuRef },
  );

  // Scroll direction hide/show animation
  useGSAP(() => {
    if (!navRef.current) return;

    let lastScrollY = window.scrollY;
    let isHidden = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only animate if scroll changed enough (prevents jitter)
      if (Math.abs(currentScrollY - lastScrollY) < 5) return;

      if (currentScrollY > lastScrollY && !isHidden) {
        // Scrolling DOWN → hide navbar (slide up)
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
        isHidden = true;
      } else if (currentScrollY < lastScrollY && isHidden) {
        // Scrolling UP → show navbar (slide down)
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
        isHidden = false;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run once on mount

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className="bg-[#fafaf9] h-[10vh] md:h-[12vh] header align flex justify-between items-center py-3 fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      >
        <div className="logo h-[80%] w-[10vw] flex items-center justify-center min-w-[80px]">
          <img
            src="/assets/logo-nobg.png"
            alt="CareHome Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <ul className="flex gap-10 h-full items-center">
            <li className="link">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `links ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `links ${isActive ? "active" : ""}`
                }
              >
                Service
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `links ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        )}

        {/* Desktop "Get in Touch" */}
        {!isMobile && (
          <div className="get-in-touch">
            <button className="get-in-touch-btn">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `links ${isActive ? "active" : ""}`
                }
              >
                Get in Touch
              </NavLink>
            </button>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div
            onClick={toggleMenu}
            className="menu-svg h-full w-[10vw] flex items-center justify-center cursor-pointer min-w-[60px]"
          >
            {menuOpen ? (
              <img
                src="/assets/svg/cross.svg"
                alt="close"
                className="h-[70%]"
              />
            ) : (
              <img src="/assets/svg/menu.svg" alt="menu" className="h-[50%]" />
            )}
          </div>
        )}
      </nav>

      {/* Mobile sliding menu */}
      {isMobile && (
        <div
          ref={menuRef}
          className={`fixed top-[10vh] left-0 right-0 bg-[#fafaf9] shadow-lg z-40 overflow-hidden ${
            menuOpen ? "block" : "hidden"
          }`}
          style={{ height: "calc(50vh - 10vh)" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-3 text-2xl">
            <NavLink
              to="/"
              end
              onClick={toggleMenu}
              className={({ isActive }) =>
                `mobile-link links ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `mobile-link links ${isActive ? "active" : ""}`
              }
            >
              Service
            </NavLink>

            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `mobile-link links ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `mobile-link get-in-touch-btn text-center px-8 py-4 text-xl ${isActive ? "active" : ""}`
              }
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
