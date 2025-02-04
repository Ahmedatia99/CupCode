import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { questions } from './../constants/index';

export default function FAQ({ questions }) {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section>
      <div className="flex flex-col transition-all">
        {questions.length > 0 ? (
          questions.map((el, index) => (
            <div key={index} className="px-3 py-5 border-b-2 border-eclipse bg-[#f8f8f8]">
              {/* Question */}
              <div className="flex items-center justify-between ">
                <h2 className="text-darkness text-base md:text-lg">{el.ques}</h2>
                <button
                  onClick={() => toggleVisibility(index)}
                  aria-expanded={visibleIndex === index}
                  aria-label={
                    visibleIndex === index
                      ? "Collapse answer"
                      : "Expand answer"
                  }
                  className="transition-all p-2 rounded-md"
                >
                  {visibleIndex === index ? (
                    <FaMinus
                      size={20}
                      className="md:ml-8 mobile:ml-3 cursor-pointer text-eclipse"
                    />
                  ) : (
                    <FaPlus
                      size={15}
                      className="md:ml-8 mobile:ml-3 rounded-md cursor-pointer text-eclipse"
                    />
                  )}
                </button>
              </div>

              {/* Animated Answer */}
              {visibleIndex === index && (
                <motion.div
                  initial={{ opacity: 1, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-4"
                >
                  <p className="text-darkness text-sm md:text-base">
                    {el.ans}
                  </p>
                </motion.div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">
            Select a category to view FAQs.
          </p>
        )}
      </div>
    </section>
  );
}
