import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

interface FAQItem {
  id: number;
  ques: string;
  ans: string;
}

interface FAQProps {
  questions: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ questions }) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null); // For visibility toggling based on number type

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section>
      <div className="flex flex-col transition-all">
        {questions?.length > 0 ? (
          questions.map((el) => (
            <div
              key={el.id}
              className="px-3 py-5 border-b-2 border-eclipse bg-[#f8f8f8]"
            >
              <div className="flex items-center justify-between ">
                <h2 className="text-darkness text-base md:text-lg">
                  {el.ques}
                </h2>
                <button
                  onClick={() => toggleVisibility(el.id)}
                  aria-expanded={visibleIndex === el.id}
                  aria-label={
                    visibleIndex === el.id ? "Collapse answer" : "Expand answer"
                  }
                  className="transition-all p-2 rounded-md"
                >
                  {visibleIndex === el.id ? (
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

              {visibleIndex === el.id && (
                <motion.div
                  initial={{ opacity: 1, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-4"
                >
                  <p className="text-darkness text-sm md:text-base">{el.ans}</p>
                </motion.div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No FAQs available.</p>
        )}
      </div>
    </section>
  );
};

export default FAQ;
