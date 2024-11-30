"use client";

import React from "react";
import { type DotGroupProps, Dot, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { cn } from "@/lib/utils";

type Props = Omit<DotGroupProps, "renderDots">;

export function DefaultDotGroup({ ...props }: Props) {
  return (
    <DotGroup
      {...props}
      renderDots={({ currentSlide = 0, totalSlides = 0 }) => (
        <React.Fragment>
          {Array.from({ length: totalSlides }).map((_value, index) => (
            <Dot
              key={index}
              slide={index}
              className={cn("rounded-full h-3 w-3 bg-gray-900", {
                "bg-primary": index === currentSlide,
              })}
            />
          ))}
        </React.Fragment>
      )}
    />
  );
}
