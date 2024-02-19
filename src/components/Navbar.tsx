import React from "react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

import { ModeToggle } from "./ui/Toggle";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Ps2 } from "@/fonts/Fonts";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  const scrollToTop = () => {
    // Scroll to the element with the specified ID
    scroll.scrollToTop({
      duration: 1000, // You can adjust the duration for the scrolling animation
      smooth: "linear", // You can adjust the easing function
    });
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 90; // Adjust the scroll threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const [NavBar, setNavBar] = useState(() => {
    return false;
  });
  const showMenu = () => {
    setNavBar(!NavBar);
  };
  return (
    <nav
      className={`bg-inherit w-[100vw] top-0 fixed z-[9999] ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center p-6 px-20 navCont ${Ps2.className}`}
      >
        <div>
          <p className="text-xl tracking-widest uppercase font-extrabold  text-primary">
            {" "}
            Ivan.<span className="text-orange-500">Dev</span>
          </p>
        </div>
        <div className="flex justify-evenly items-center  ">
          <ul
            className={` NavItems flex gap-10 items-center ${
              NavBar ? "showNav" : ""
            }`}
          >
            <ScrollLink to="home" smooth={true} duration={1000} offset={-50}>
              <Button
                variant={"link"}
                onClick={showMenu}
                className="NavLink text-center text-sm font-medium hover:text-orange-400 tracking-wider"
              >
                Home
              </Button>
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={1000} offset={-50}>
              <Button
                variant={"link"}
                onClick={showMenu}
                className="NavLink text-center text-sm font-medium hover:text-orange-400 tracking-wider"
              >
                About
              </Button>
            </ScrollLink>
            <ScrollLink
              to="Projects"
              smooth={true}
              duration={1000}
              offset={-50}
            >
              <Button
                variant={"link"}
                onClick={showMenu}
                className="NavLink text-center text-sm font-medium hover:text-orange-400 tracking-wider"
              >
                Projects
              </Button>
            </ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={1000} offset={-50}>
              <Button
                variant={"link"}
                onClick={showMenu}
                className="NavLink text-center text-sm font-medium hover:text-orange-400 tracking-wider"
              >
                Contact
              </Button>
            </ScrollLink>
            <div className="DesktopDarkModing">
              {" "}
              <ModeToggle />
            </div>
          </ul>
        </div>
        <div className=" flex justify-between items-center">
          <div className="BurgerDarkModing invisible mr-8">
            {" "}
            <ModeToggle />
          </div>
          <div className="Menu" onClick={showMenu}>
            {NavBar ? (
              <X className="cursor-pointer h-8 w-8" />
            ) : (
              <Menu className=" cursor-pointer h-8 w-8" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
