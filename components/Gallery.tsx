import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Gallery = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-4">
        Shining
        <span className="text-purple"> Memories</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <a href="https://buds-official-gallery.netlify.app/" target="_blank">
          <MagicButton
            title="View Gallery"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Gallery;