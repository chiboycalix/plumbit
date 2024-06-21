import React from "react";
import Image from "next/image";
import { BrightPearl, PearlFisher, PlanDay, Umbraco } from "@/constants";

const LogoCarousel = () => {
  return (
    <div className="text-center bg-secondary bg-opacity-30 py-[3rem] antialiased">
      <p className="mb-[2rem] text-xs">TRUSTED BY OVER 1K+ COMPANIES</p>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll">
          <li>
            <Image src={BrightPearl} alt="BrightPearl" />
          </li>
          <li>
            <Image src={PearlFisher} alt="PearlFisher" />
          </li>
          <li>
            <Image src={PlanDay} alt="PlanDay" />
          </li>
          <li>
            <Image src={Umbraco} alt="Umbraco" />
          </li>
          
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image src={BrightPearl} alt="BrightPearl" />
          </li>
          <li>
            <Image src={PearlFisher} alt="PearlFisher" />
          </li>
          <li>
            <Image src={PlanDay} alt="PlanDay" />
          </li>
          <li>
            <Image src={Umbraco} alt="Umbraco" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogoCarousel;
