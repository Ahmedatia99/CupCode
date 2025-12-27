import { feature } from "../constants/index.ts";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const KnowUs = () => {
  return (
    <main
      id="about"
      className="px-5 w-screen h-screen container mx-auto pb-10 max-sm:px-3"
    >
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 gap-20 items-center h-full">
        <div className="about-bg bg-cover bg-center bg-no-repeat z-0 relative max-md:order-2 max-sm:hidden">
          <div className="flex justify-center items-center gap-5 w-full h-full ">
            <img
              loading="lazy"
              src="/images/hawara.jpg"
              className=" aspect-auto w-[340px] max-sm:w-[200px] max-md:w-[200px] max-md:h-[280px] h-[480px] max-sm:h-auto rounded-2xl -rotate-12 shadow-2xl "
            />
            <img
              loading="lazy"
              src="./images/about-2.jpg"
              className="w-auto max-md:w-[160px] h-auto rounded-2xl shadow-2xl relative bottom-25 right-[30px]"
            />
          </div>
          <div className="flex justify-between item-center gap-10 absolute top-[50%] max-md:top-[20%] max-md:left-[10%] -z-50">
            <span>
              <img
                src="./images/abstract/icon-paper-plan.webp"
                className="max-md:w-60"
                loading="lazy"
              />
            </span>
            <span>
              <img
                src="./images/abstract/icon-dotted-line.webp"
                loading="lazy"
              />
            </span>
          </div>
        </div>
        {/* text info */}
        <div className="pt-10 max-w-lg relative max-sm:order-1 max-md:order-1">
          <span className="text-2xl max-sm:text-md max-md:text-lg text-shiny font-semibold">
            Get to know us
          </span>
          <h1 className="text-5xl max-sm:text-2xl max-md:text-3xl font-bold text-darkness leading-14 max-md:leading-10 max-sm:leading-8 tracking-tight">
            Grow your skills learn with us from anywhere.
          </h1>
          <p className="mt-3 text-gray-400 max-sm:text-sm max-md:text-sm">
            We are committed to providing high-quality education and resources
            to help you achieve your learning goals. Our team of experienced
            instructors and industry experts are dedicated to creating engaging
            and effective learning experiences.
          </p>
          <div className="grid grid-cols-2">
            {feature.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mt-3">
                <FaCheck
                  className={`rounded-full p-3 text-white scale-100 hover:rotate-360 hover:scale-50 transition-all`}
                  style={{ backgroundColor: item.color }}
                  size={45}
                />
                <span className="text-xl max-sm:text-sm max-md:text-base font-semibold text-darkness">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-20 max-md:hidden">
            <motion.img
              src="/images/abstract/dots-1.png"
              animate={{ x: [0, 150, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="max-sm:absolute top-[30%] md:hidden -z-100">
            <img src="/images/abstract/icon-dotted-map-2.png" loading="lazy" />
          </div>
          <div>
            <div className="absolute top-0 right-1 ">
              <img
                src="/images/abstract/vector-7.png"
                className="rotate-180 max-md:w-18 "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KnowUs;
