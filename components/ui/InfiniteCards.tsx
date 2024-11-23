"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const imageSrc =
    "data:image/jpeg;base64,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";

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={imageSrc}
                alt="Profile"
                className="object-cover w-full h-[50vh] rounded-lg"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
