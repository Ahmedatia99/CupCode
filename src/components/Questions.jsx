import React from "react";
import FAQ from "./FAQ";
const Questions = () => {
  return (
    <main className="py-10 h-screen bg-older">
      <div className="container mx-auto px-5 relative z-0 h-full">
        <div className="flex justify-around items-center relative z-20 h-full flex-wrap">
          <img src="./images/abstract/qfa.png" alt="question" className="max-sm:hidden"/>
          <FAQ />
        </div>
        <div className=" absolute left-0 top-[30%] max-sm:top-0 -z-10 animated">
          <img src="/images/abstract/icon-group-1.png" alt="abstract" />
        </div>
        <div className=" absolute right-0 top-[30%] max-sm:bottom-0 -z-10 animated">
          <img src="/images/abstract/icon-group-2.png" alt="abstract" />
        </div>
      </div>
    </main>
  );
};

export default Questions;
