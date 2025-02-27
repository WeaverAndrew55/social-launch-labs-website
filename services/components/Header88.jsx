"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header88() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-start justify-center p-8 md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Medium length hero heading goes here
            </h1>
            <p className="text-text-alternative md:text-md">
              Discover our tailored video marketing packages designed to drive
              growth. Choose the right plan to elevate your business and achieve
              scalable success.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button title="Button" variant="primary">
              Button
            </Button>
            <Button title="Button" variant="secondary-alt">
              Button
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
      </div>
    </section>
  );
}
