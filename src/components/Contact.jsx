import Footer from "./Footer";
import { Button } from "./Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main className="h-screen flex flex-col justify-around pt-8 max-sm:px-3 max-sm:pt-4">
      <div className="container mx-auto ">
        <div className="banner-bg bg-cover bg-center bg-no-repeat flex flex-col gap-5 relative px-8 py-14 max-sm:px-4 rounded-xl overflow-hidden">
          <motion.img
            src="/images/abstract/circle-lines.png"
            className="w-40 absolute right-30 -bottom-8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src="/images/mic-speaker.png"
            className="w-18 absolute right-40 bottom-5 max-sm:hidden"
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <img src="/images/tag.png" className="w-16 absolute right-10 max-sm:hidden" />
          <img src="/images/coding.png" className="w-12 absolute left-10 max-sm:hidden" />
          <div className="text-white flex-col flex justify-center items-center">
            <h1 className="text-4xl max-sm:text-2xl flex flex-col items-center">
              Ask Any Questions{" "}
              <span className="font-courgette">You Want!</span>
            </h1>
            <p className="shadow-white my-4 max-sm:text-xs text-center">
              Contact on this number for any Questions!
            </p>
            <Button action="+201111111111" variant="morning" />
          </div>
          <motion.img
            src="/images/abstract/dots-1.png"
            className="opacity-40 absolute -bottom-5 right-[60%]"
            animate={{ x: [0, 150, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
