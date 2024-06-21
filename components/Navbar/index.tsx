"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  Collapse,
  IconButton,
} from "@/components/material"
import Image from "next/image";
import { LogoBlue, LogoGreen } from "@/constants";
import Button from "@/components/Button"
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { usePathname } from 'next/navigation'

const StickyNavbar = () => {
  const currentPath = usePathname();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {
        navLinks.map((navLink) => {
          return (<li key={navLink.id} className={`relative p-1 font-normal hover:text-primary-500 ${currentPath === navLink.path ? 'text-primary-400' : 'text-black'} text-sm`}>
            <Link href={navLink.path} className="flex items-center">
              {navLink.name}
            </Link>
            {
              currentPath === navLink.path && <motion.div 
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }} 
                className="absolute w-4 bg-primary-400 h-[3px] mx-auto hidden lg:block top-[30px] left-[35%]"></motion.div>
            }
          </li>)
        })
      }
    </ul>
  );

  return (
    <div className="overflow-scroll drop-shadow-md">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-[10rem] lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="">
            <Image src={LogoGreen} alt="Logo" className="" height={30} />
          </div>
          <div className="flex items-center gap-[4rem] justify-between">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="hidden lg:inline-block">
            <Button caption="Book now" />
          </div>
          <div className="lg:hidden">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="">
            <Button caption="Book now" />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;