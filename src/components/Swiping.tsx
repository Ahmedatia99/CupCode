import { comments } from "../constants";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Swiping = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={40}
      pagination={{
        clickable: true,
        renderBullet: (className) =>
          `<span class="${className}"></span>`,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {comments.map((item) => (
        <SwiperSlide
          className="!flex justify-center max-sm:flex-col items-center"
          key={item.id}
        >
          <div className="w-fit relative comment">
            <img
              src={item.img}
              alt="comment"
              className="w-48 h-auto rounded-xl mt-10 max-sm:mt-0"
            />
          </div>
          <div className="bg-white h-50 max-sm:h-46 text-darkness max-w-sm relative rounded-2xl mt-10 max-sm:mt-0">
            <h1 className="text-3xl max-sm:text-xl font-medium p-5 max-sm:p-3 pb-2">
              {item.name}
            </h1>
            <div className="flex gap-2 px-5 max-sm:px-3 pt-2">
              {Array.from({ length: item.rating }, (_, index) => (
                <FaStar key={index} size={20} className="text-shiny" />
              ))}
            </div>
            <p className="px-5 max-sm:px-3 pt-3 text-gray-500 max-sm:text-xs">
              {item.comment}
            </p>
            <img
              src="/images/abstract/curve.png"
              className="w-full absolute bottom-0 rounded-2xl"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiping;
