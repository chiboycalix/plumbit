"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BrightPearl, PearlFisher, PlanDay, Umbraco } from "@/constants";

const partners = [
  {
    name: "Bright Pearl",
    img: BrightPearl
  },
  {
    name: "Pearl Fisher",
    img: PearlFisher
  },
  {
    name: "Plan Day",
    img: PlanDay
  },
  {
    name: "Umbraco",
    img: Umbraco
  },
  
];
const LogoCarousel = () => {
  return (
    <div className="bg-secondary bg-opacity-10 py-[2rem]">
      <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <p className="text-xs font-bold">TRUSTED BY OVER 1K+ COMPANIES</p>
      <InfiniteMovingCards
        items={partners}
        direction="left"
        speed="slow"
      />
    </div>
    </div>
  );
}
export default LogoCarousel