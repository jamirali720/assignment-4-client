// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useGetSportsQuery } from "../../redux/api/productsApi";

const Carousel = () => {
  const { data } = useGetSportsQuery();
  return (
    <div className="w-screen md:w-full h-[75vh] relative  flex justify-center justify-items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data?.data.slice(0, 10).map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={product.image.url}
                className="w-full h-full object-fit"
                alt=""
              />
              <div className="absolute top-40 translate-x-20">
                <h1 className="text-red-500 my-2 text-3xl"> {product.name}</h1>
                <h1 className="text-red-500 my-2  text-2xl">
                  {" "}
                  {product.category}
                </h1>
                <h1 className="text-red-500 my-2  text-xl"> {product.brand}</h1>
              </div>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
