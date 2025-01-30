import React from "react";
import { icons } from "./../constants/index";
import { Button } from './Button';
const Hero = () => {
  return (
    <main className="container mx-auto max-sm:px-2 h-[calc(100vh-106px)]">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 items-center h-full">
        {/* article */}
        <div className="flex justify-center flex-col items-start h-[70%]">
          <img src="./images/tag.png" alt="tag" className="animated max-sm:w-14 max-sm:h-14" />
          <h1 className="text-6xl max-sm:text-4xl mt-5 text-darkness font-semibold">
            Best Online Learning <br />
            <span className="font-courgette mt-3 font-normal flex">
              Resources!
              <img
                src="./images/rocket.png"
                alt="rocket"
                className="w-18 h-18 max-sm:w-12 max-sm:h-12"
              />
            </span>
          </h1>
          <p className="mt-3 mb-10 text-3xl max-sm:text-xl text-darkness font-medium">
            Make Your Free Account & Get Discounts
          </p>
          <Button action="Contact Now" />

          <div className="swiper mt-20 max-sm:hidden">
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
              className="w-18 h-18 aspect-auto relative max-sm:hidden "
              style={{ left: `-${icon.left}%`, top: `-${icon.top}%` }}
            />
          ))}
          <img src="/images/main-img.png" className="aspect-auto left-[40%] top-[20%] max-sm:w-60" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
