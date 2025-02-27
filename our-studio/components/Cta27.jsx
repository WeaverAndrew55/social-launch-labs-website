"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta27() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
          Ready to Create in a Professional Studio?
        </h2>
        <p className="text-text-alternative md:text-md">
          Let’s make your next video project a success.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Book">Book</Button>
          <Button title="Schedule" variant="secondary-alt">
            Schedule
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
