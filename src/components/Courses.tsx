import { courses } from "./../constants/index.ts";
import { contentCourses } from "./../constants/index.ts";
import { MdOutlineDone } from "react-icons/md";
import { Button } from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Courses = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"> ${index + 1} </span>`;
    },
  };
  return (
    <main className="h-screen container mx-auto py-8 max-sm:py-2 overflow-hidden xl:flex flex-col justify-center items-center">
      <div className="relative max-sm:mb-3">
        <h1 className="text-center text-gray-300 font-bold text-6xl max-sm:text-5xl tracking-widest">
          Courses
        </h1>
        <p className="text-center relative -top-5 text-shiny font-semibold text-2xl max-sm:text-lg tracking-tighter">
          Course Subscription Plan
        </p>
      </div>
      <div className="flex justify-center items-center relative max-sm:pl-14 max-sm:pr-10 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper "
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 70,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            12769: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {/* className="grid grid-cols-1 gap-8"> */}
          {courses.map((item) => (
            <SwiperSlide
              key={item.id}
              className=" border-2 p-8 max-sm:p-4 rounded-xl border-shiny bg-white shadow-xl text-darkness 3xl:max-w-sm lg:max-w-sm"
            >
              <div className="flex flex-col  items-center">
                <h1 className="text-2xl max-sm:text-xl capitalize font-semibold mb-5 max-sm:mb-3">
                  {item.level}
                </h1>
                <h2>
                  <div className="flex justify-start items-start">
                    <span className="line-through text-lg max-sm:text-sm mr-1 text-gray-500">
                      {item.discount}
                    </span>
                    <span className="text-xs leading-3 font-semibold">EGP</span>
                    <span className="text-4xl max-sm:text-2xl font-semibold">
                      {item.mainPrice}
                    </span>
                  </div>
                </h2>
                <div className="flex justify-center items-center text-xs gap-1 mt-3">
                  <span className="border bg-shiny  text-white px-3 py-1 rounded-xl shadow-lg border-none">
                    {item.duration} months
                  </span>
                  <span className="border bg-shiny  text-white px-3 py-1 rounded-xl shadow-lg border-none">
                    {item.session} session
                  </span>
                  <span className="border bg-shiny  text-white px-3 py-1 rounded-xl shadow-lg border-none">
                    {item.hours} hours
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-5 pt-5 flex flex-col justify-center items-start gap-3 mb-5">
                <span
                  className={`text-sm ${
                    item.id ? "text-shiny" : "text-gray-500"
                  }`}
                >
                  {item.preRequests}
                </span>
                <h1 className="text-md font-inter font-semibold mb-2">
                  {item.contentTitle}:
                </h1>
                {contentCourses[item.id].map((content, index) => (
                  <h1 className="flex items-center gap-3">
                    <MdOutlineDone className="text-shiny" />
                    <p key={index} className="text-xs">
                      {content}
                    </p>
                  </h1>
                ))}
              </div>
              <div className="text-center mt-8 max-sm:mt-4 w-full">
                <Button
                  action="Read More"
                  variant="second"
                  className="w-full"
                ></Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <img
            src="/images/abstract/price-1.webp"
            className="absolute -top-20 -z-50 right-0 max-sm:hidden"
          />
          <img
            src="/images/abstract/icon-book.webp"
            className="absolute -top-20 max-sm:left-2 max-sm:top-5  -z-50 left-12"
          />
          <img
            src="/images/abstract/icon-paper-plan.webp"
            className="absolute top-[55%] left-[10%] max-sm:bottom-0 -z-50 rotate-6"
          />
        </div>
      </div>
    </main>
  );
};

export default Courses;
