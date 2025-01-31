import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiX } from "react-icons/fi";
import { questions } from "./../constants/index";
import { motion } from "framer-motion";

export default function QAF() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section>
      <div className="flex flex-col transition-all">
        {questions.map((el, index) => (
          <div key={index} className="p-5 border border-[#00c7c4] mb-3 rounded-lg">
            {/* Question */}
            <div className="flex items-center justify-between">
              <h2 className="text-darkness text-base md:text-lg">{el.ques}</h2>
              <button
                onClick={() => toggleVisibility(index)}
                aria-expanded={visibleIndex === index}
                aria-label={
                  visibleIndex === index ? "Collapse answer" : "Expand answer"
                }
                className="transition-all p-2 rounded-md"
              >
                {visibleIndex === index ? (
                  <FiX
                  size={35}
                  className="md:ml-8 mobile:ml-3 p-2 bg-[#00c7c4] rounded-md cursor-pointer text-white"
                />
              ) : (
                <GoPlus
                  size={35}
                  className="md:ml-8 mobile:ml-3 p-2 bg-[#00c7c4] rounded-md cursor-pointer text-white"
                />
                )}
              </button>
            </div>

            {/* Animated Answer */}
            {visibleIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mt-4"
              >
                <p className="text-darkness text-sm md:text-base">{el.ans}</p>
                
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
