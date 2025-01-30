import React from "react";
import { feature } from "../constants/index.ts";
import { FaCheck } from "react-icons/fa6";

const KnowUs = () => {
  return (
    <main className="w-screen h-screen container mx-auto pb-10 max-sm:px-2">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-20 items-center h-full">
        <div className="about-bg z-0 relative max-sm:order-2">
          <div className="flex justify-center items-center gap-5 w-full h-full">
            <img
              src="/images/hawara.jpg"
              className=" aspect-auto w-[340px] max-sm:w-[200px] h-[480px] max-sm:h-auto rounded-2xl -rotate-12 shadow-2xl max-sm:relative max-sm:left-[40px]"
            />
            <img
              src="./images/about-2.jpg"
              className="w-auto max-sm:w-[180px] max-sm:h-auto rounded-2xl shadow-2xl relative bottom-[100px] right-[30px] max-sm:right-[20px] max-sm:-z-40"
            />
          </div>
          <div className="flex justify-between item-center gap-10 absolute top-[50%] max-sm:top-[30%] -z-50">
            <span>
              <img src="./images/abstract/icon-paper-plan.webp"/>
            </span>
            <span>
              <img src="./images/abstract/icon-dotted-line.webp"/>
            </span>
          </div>
        </div>
        {/* text info */}
        <div className="pt-10 max-w-lg relative max-sm:order-1">
          <span className="text-2xl max-sm:text-lg text-stroke font-semibold">
            Get to know us
          </span>
          <h1 className="text-5xl max-sm:text-2xl font-bold text-darkness leading-14 max-sm:leading-8 tracking-tight">
            Grow your skills learn with us from anywhere.
          </h1>
          <p className="mt-3 text-gray-400 max-sm:text-sm">
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
            tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus
            augue, commodo ornare felis non, eleifend molestie metus pharetra
            eleifend.
          </p>
          <div className="grid grid-cols-2">
            {feature.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mt-3">
                <FaCheck
                  className={`rounded-full p-3 text-white scale-100 hover:rotate-360 hover:scale-50 transition-all`}
                  style={{ backgroundColor: item.color }}
                  size={45}
                />
                <span className="text-xl max-sm:text-sm font-semibold text-darkness">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <div className="swiper mt-20 max-sm:hidden">
            <img src="/images/abstract/dots-1.png" />
          </div>
          <div>
            <div className="absolute top-0 right-0 ">
              <img src="/images/abstract/vector-7.png" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KnowUs;
