import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_1 from "../../assets/app_img1.jpg";
import slide_image_2 from "../../assets/app_img3.jpg";
import slide_image_3 from "../../assets/app_img2.jpg";
import slide_image_4 from "../../assets/app_img4.PNG";
import slide_image_5 from "../../assets/app_img5.jpg";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Carousel(props) {
  return (
    <div className="container">
      <h1 className="heading">App galery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <PiCaretLeftBold/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <PiCaretRightBold />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
