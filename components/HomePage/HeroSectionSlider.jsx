import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { HeroSliderSingleCompo } from "../Slider/HeroSliderSingleCompo";

const data = [
  {
    title: "Shaping Modern Technology To Accelerate Your Business Growth",
    img: "/images/HeroSliderImg/homepage---slider.png",
  },
  {
    title: "Applying Best Practices To Deliver Highest Quality Services",
    img: "/images/HeroSliderImg/homepage-slider-1.png",
  },
  {
    title: "Defining Solutions To Prepare Your Business For Opportune Time",
    img: "/images/HeroSliderImg/homepage-slider-2.png",
  },
];

export const HeroSectionSlider = () => {
  return (
    <>
      <Swiper
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((slider, index) => (
          <SwiperSlide key={index}>
            <HeroSliderSingleCompo data={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
