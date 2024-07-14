// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../assets/images/caro1.jpg";
import image2 from "../assets/images/caro2.avif";
import image3 from "../assets/images/caro3.avif";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div className="w-full h-[75vh]  flex justify-center justify-items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        autoplay={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(data) => console.log("slide change", data)}
      >
        {/* {
            Array.from([1, 2, 3, 4, 5]).map((item, index) => (
                <SwiperSlide key={index}>{item}</SwiperSlide>
            ))
        }
       */}
        <SwiperSlide>
          <img src={image1} className="w-full h-full object-fit" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} className="w-full h-full object-fit" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={image3} className="w-full h-full object-fit" alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
