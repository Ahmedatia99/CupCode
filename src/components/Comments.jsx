import Swiping from "./Swiping";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Comments = () => {
  return (
    <main className="max-sm:px-2 px-5 h-screen py-10 max-sm:py-2  flex justify-center bg-lighting overflow-hidden">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 max-md:grid-cols-1 items-center container mx-auto ">
        <div className="flex flex-col justify-center relative w-full h-full">
          <div className="flex justify-end">
            <img
              src="/images/quote.png"
              className="aspect-auto max-sm:w-20 max-md:w-18"
              loading="lazy"
            />
          </div>
          <h1 className="text-5xl max-sm:text-3xl max-md:text-4xl text-darkness tracking-tight leading-14 max-md:leading-10 max-sm:leading-8 font-semibold">
            Student’s Stories! Some Awesome Comments By Our
            <span className="font-courgette font-medium"> Students!</span>
          </h1>
          <p className="text-gray-500 mt-5">
            Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
            tempus. Volutpat tortor tincidunt egestas sit risus donec.
          </p>
          <div className="flex justify-center mt-10 relative max-sm:hidden ">
            <img
              src="/images/abstract/vector-7.png"
              className="max-md:rotate-180 max-md:absolute max-md:right-0"
              loading="lazy"
            />
            <motion.img
              src="/images/abstract/dots-1.png"
              className="aspect-auto w-auto h-14 absolute bottom-0 max-md:hidden"
              animate={{ x: [0, 150, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div>
          <img
            src="/images/abstract/cover-comment.png"
            className="absolute max-md:w-48"
            loading="lazy"
          />
          <Swiping />
        </div>
      </div>
    </main>
  );
};

export default Comments;
