import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "../Layout/App.css";

const AutoSlider = () => {
  const images = [
    {
      src: "https://i5.walmartimages.com/asr/f37fb16b-960b-4d0a-86d9-ff6e669bd076.ecfe7d37f0e92c951e5949652d77a3e9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      alt: "Sports Item 1",
      text: "Premium Footballs",
    },
    {
      src: "https://i5.walmartimages.com/asr/574a9968-95b8-40b4-b7e6-d2f22b5b5c65.feef96a6c9d7ad233ad8188727563ee9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      alt: "Sports Item 2",
      text: "Professional Footballs",
    },
    {
      src: "https://img.kwcdn.com/product/fancy/d178945b-ff6c-46c7-8f70-9114069c6173.jpg",
      alt: "Sports Item 3",
      text: "Premium Shoes",
    },
    {
      src: "https://img.kwcdn.com/product/fancy/87104e88-a28b-4783-aed2-bcc7856dfc67.jpg?imageView2/2/w/500/q/60/format/webp",
      alt: "Sports Item 4",
      text: "High-Quality Balls",
    },
    {
      src: "https://i.pinimg.com/736x/39/c3/11/39c3112a63deb11a20427ec9e0c4d5fa.jpg",
      alt: "Sports Item 5",
      text: "All-in-One Equipment",
    },
  ];

  return (
    <div className="sliders h-[400px] lg:h-[500px]  py-8 flex flex-col items-center justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-11/12 md:w-3/4"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-3xl lg:text-4xl font-bold text-center">
                {image.text}
              </h3>
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
