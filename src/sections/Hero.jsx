import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="relative pb-40 pt-60 max-lg:pt-52 max-md:pt-36 max-md:pb-32 max-lg:pb-36">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="uppercase caption small-2 text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 uppercase h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              we designed XORA AI Video Editor to be an easy to use, quick to
              learnd, and surprisingly powerful.
            </p>
            <LinkScroll to="features" smooth={true} spy offset={-100}>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          
          </div>
        
        </div>
        <div
          className="absolute -top-32 w-[1230px] pointer-events-none 
                     left-[calc(50%-340px)] 
                     hero-img_res          
                     z-0"                 
        >
          <img
            src="/images/hero.png"
            className="w-full h-auto max-lg:h-auto"
            alt="hero"
          />
        </div>
      </Element>
    </section>
  );
};
