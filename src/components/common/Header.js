"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";  
import { PiPlusBold, PiUserCircleLight } from "react-icons/pi";
 
  
import { usePathname } from "next/navigation"; 

const Header = ({ }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixMenu, setFixMenu] = useState(false);
 
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
 
  const stickyMenuHandler = () => {
    const scrollH = window.scrollY;
    if (scrollH > 500) {
      setFixMenu(true);
    } else {
      setFixMenu(false);
    }
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyMenuHandler);
    stickyMenuHandler();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", stickyMenuHandler);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`py-2 bg-white z-50 ${
          fixMenu ? "sticky top-0 left-0 w-full nav__sticky" : ""
        }`}
        style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="inline-flex items-center"> 
              <Link href={"/"} className="inline-block">
                <Image
                  src={'/images/logo.png'}
                  alt="logo"
                  width={80}
                  height={68} 
                />
              </Link>
            </div>
              <button
                onClick={() => setShowMenu(true)}
                className="w-8 h-8 flex items-center text-black md:hidden ml-4"
              >
                <RxHamburgerMenu className="text-2xl lg:text-3xl text-black" />
              </button>
            <div className="ml-auto hidden lg:block">
               

              <ul className="hidden md:flex items-center">
                <li>
                  <Link
                    href={"/"}
                    className={`${
                      pathname === "/" ? "text-primary" : "text-dark"
                    } font-sans p-3`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/listing"}
                    className={`${
                      pathname.indexOf("/listing") !== -1
                        ? "text-primary"
                        : "text-dark"
                    } font-sans p-3`}
                  >
                    Listings
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/news"}
                    className={`${
                      pathname.indexOf("/news") !== -1
                        ? "text-primary"
                        : "text-dark"
                    } font-sans p-3`}
                  >
                    News                          
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/business"}
                    className={`${
                      pathname.indexOf("/promote-your-business") !== -1
                        ? "text-primary"
                        : "text-dark"
                    } font-sans p-3`}
                  >
                    Promote Your Business                          
                  </Link>
                </li>

                 
                  <li>
                    <Link
                      href="/login"
                      className={`${
                        pathname === "/login" ? "text-primary" : "text-primary"
                      } font-sans p-3 inline-flex items-center`}
                    >
                      <PiUserCircleLight className="text-xl mr-2" />
                      Sign in / Sign up
                    </Link>
                  </li>
               
                <li className="lg:ml-10">
                  <Link href="/" className="px-4 py-2 bg-primary text-white rounded-xl inline-flex font-bold">
                    <PiPlusBold className="text-lg lg:text-xl !leading-[1] mr-2 relative top-[1px]" />
                    <span>Add Listing</span>
                  </Link>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </nav>
        
    </>
  );
};

export default Header;
 