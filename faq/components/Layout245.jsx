"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout245() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">FAQs</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                General Questions About Our Services
              </h2>
            </div>
            <div>
              <p className="md:text-md">
                We understand that you may have questions about our offerings.
                This section addresses common inquiries to help you make
                informed decisions. Let us clarify how we can support your video
                marketing journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                What makes Social Launch Labs different?
              </h3>
              <p>
                We specialize in authority-building content and AI-enhanced
                workflows to deliver high-quality video marketing solutions
                tailored to your business needs.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Who is SLL best suited for?
              </h3>
              <p>
                Business owners, marketing teams, and agencies looking for
                scalable video marketing solutions.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Do I need prior experience with video marketing?
              </h3>
              <p>
                No, our team will guide you through each step of the process.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
