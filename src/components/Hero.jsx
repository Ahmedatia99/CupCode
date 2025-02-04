import React from "react";
import { icons } from "./../constants/index";
import { Button } from "./Button";
const Hero = () => {
  return (
    <main className="container mx-auto max-sm:px-2 h-[calc(100vh-106px)]">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:gap-5 items-start max-md:items-center max-sm:items-start 3xl:items-center h-full">
        {/* article */}
        <div className="flex justify-start lg:justify-center flex-col items-start h-[70%]">
          <img
            src="./images/tag.png"
            alt="tag"
            className="animated max-sm:w-14 max-sm:h-14 max-md:w-14"
          />
          <h1 className="text-6xl max-sm:text-4xl max-md:text-5xl mt-5 text-darkness font-semibold">
            Best Online Learning <br />
            <span className="font-courgette mt-3 font-normal flex">
              Resources!
              <img
                src="./images/rocket.png"
                alt="rocket"
                className="w-18 h-18 max-sm:w-12 max-sm:h-12 max-md:w-14 max-md:h-auto"
              />
            </span>
          </h1>
          <p className="mt-3 mb-10 max-sm:mb-3 max-md:my-3 text-3xl max-sm:text-xl max-md:text-base text-darkness font-medium">
            Make Your Free Account & Get Discounts
          </p>
          <Button action="Contact Now" />

          <div className="swiping mt-20 lg:mt-10 max-sm:hidden">
            <img src="/images/abstract/dots-1.png" />
          </div>
        </div>
        {/* icons && main image */}
        <div className="flex flex-col justify-center items-end w-full">
          {icons.map((icon) => (
            <img
              key={icon.id}
              src={icon.src}
              alt={icon.alt}
              className="w-18 h-18 aspect-auto relative max-sm:hidden max-md:w-14 max-md:h-auto"
              style={{ left: `-${icon.left}%`, top: `-${icon.top}%` }}
            />
          ))}
          <img
            src="/images/main-img.png"
            className="aspect-auto relative left-0 bottom-0 3xl:top-0 lg:bottom-32 lg:w-80 w-96 3xl:scale-125 max-sm:-bottom-20 max-sm:left-0 max-sm:w-60 max-sm:scale-125 max-md:w-70 max-md:bottom-0"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
