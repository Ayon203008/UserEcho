import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Banner = () => {
  return (
    <div className="w-full mb-40">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div>
              <img
                src="https://i.ibb.co/1fWGxskv/anastase-maragos-Hyv-E5-Si-KMUs-unsplash.jpg"
                alt="Slide 1"
                className="w-full h-[600px] object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 top-1/2 left-20">
        <h1
                className="text-6xl font-bold mb-3"
                animate={{ color: ["#FF0080", "#FFD700", "#00FFFF", "#FF0080"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Transform Your Body
              </h1>
              <h1 className="text-3xl font-semibold text-white drop-shadow-lg">
                Transform Your Life.
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <div>
              <img
                src="https://i.ibb.co/3y81KVsf/alif-ngoylung-jg-6-ARMia-PM-unsplash.jpg"
                alt="Slide 2"
                className="w-full h-[600px] object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 top-1/2 left-20 text-white">
              <h1 className="text-6xl font-bold mb-3 drop-shadow-lg">
                Transform Your Body
              </h1>
              <h1 className="text-3xl font-semibold drop-shadow-lg">
                Transform Your Life.
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <div>
              <img
                src="https://i.ibb.co/0jxyRtNW/brad-starkey-e-P8h7-YVh-FHk-unsplash.jpg"
                alt="Slide 3"
                className="w-full h-[600px] object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 top-1/2 left-20 text-white">
              <h1 className="text-6xl font-bold mb-3 drop-shadow-lg">
                Premium Car Wash
              </h1>
              <h2 className="text-3xl font-semibold drop-shadow-lg">
                Shine Inside & Out, Wherever You Are.
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
