import { Button } from "./Button";

const Offer = () => {
  return (
    <main className=" h-screen offer-bg bg-no-repeat bg-center bg-cover overflow-hidden flex justify-center items-center max-sm:px-2 text-darkness">
      <div className=" relative container mx-auto flex justify-center items-center ga-10">
        <img
          src="/images/abstract/discount-animate.svg"
          className=" hidden max-sm:flex w-xl absolute z-0 -top-28 opacity-70"
        />
        <div className="relative flex flex-col justify-center max-sm:items-center">
          <h1 className="text-5xl max-sm:text-3xl font-semibold mb-5 mt-10">
            Get a
            <span className="font-courgette font-light text-5xl max-sm:text-3xl ml-4">
              30% Discount!
              <img src="/images/abstract/line-vector.png" className="" />
            </span>
          </h1>
          <h4 className="text-2xl max-sm:text-lg mb-3 font-semibold">Create Your Free Account Today!</h4>
          <p className="text-gray-500 max-w-sm max-sm:text-sm max-sm:text-center">
           Take advantage of this limited-time offer to kickstart your learning journey with us.
          </p>
          <div className="mt-8">
            <Button action="Read more" variant="second" className="" />
          </div>
        </div>
        <div className="max-sm:hidden">
          <img
            src="/images/discount-animate (3).svg"
            className="w-2xl max-md:w-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default Offer;
