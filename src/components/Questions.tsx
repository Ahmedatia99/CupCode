import { useState } from "react";
import { mainQuestion, questions } from "../constants/index";
import FAQ from "./FAQ";

const Questions = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const filteredQuestions = questions.filter(
    (faq) => Number(faq.categoryId) === clicked
  );

  return (
    <main className="py-10 h-screen bg-older overflow-hidden relative">
      <div className="absolute">
        <img src="/images/abstract/icon-dotted-map-2.png" alt="Background Icon" />
      </div>
      <div className="container mx-auto px-5 relative z-0 h-full">
        <div className="flex justify-center items-center gap-5 relative z-20 h-full flex-wrap">
          {/* Sidebar Categories */}
          <div className="bg-[#f8f8f8] text-gray-600 max-w-80 p-5 flex flex-col items-center gap-5 relative">
            {mainQuestion.map((el) => (
              <a
                key={el.id}
                onClick={() => setClicked(Number(el.id))} // Ensure it's a number
                className={`hover:border-l-4 ml-[4px] hover:ml-0 hover:border-eclipse p-2 cursor-pointer transition-all ${
                  clicked === Number(el.id) ? "border-l-4 border-eclipse ml-0 font-bold" : ""
                }`}
              >
                <h1 className="text-xl font-semibold">{el.heading}</h1>
                <p className="text-sm">{el.info}</p>
              </a>
            ))}
          </div>

          {/* FAQ Component */}
          <FAQ questions={filteredQuestions} />
        </div>
      </div>
    </main>
  );
};

export default Questions;
