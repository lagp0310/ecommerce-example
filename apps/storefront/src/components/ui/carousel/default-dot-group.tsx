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
      renderDots={({
        currentSlide = 0,
        totalSlides = 0,
        visibleSlides = 1,
      }) => {
        const totalDots = Math.floor(totalSlides / visibleSlides);

        return (
          <React.Fragment>
            {Array.from({ length: totalDots }).map((_value, index) => {
              const slideIndex = index * visibleSlides;
              const maxDotLimit = currentSlide + (visibleSlides - 1);
              const isDotActive =
                (currentSlide % 2 === 0 ? slideIndex : slideIndex + 1) >=
                  currentSlide && slideIndex < maxDotLimit;

              return (
                <Dot
                  key={index}
                  slide={slideIndex}
                  className={cn(
                    "rounded-full h-2.5 w-2.5 bg-gray-100 first:ml-0 ml-2",
                    {
                      "bg-primary": isDotActive,
                    }
                  )}
                />
              );
            })}
          </React.Fragment>
        );
      }}
    />
  );
}
