import Image from "next/image";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnerSlider = () => {
  return (
    <>
      <div className="sliderWrapper">
        <style jsx>{`
          .sliderWrapper {
            background-color: #313131;
          }
        `}</style>
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // when window width is >= 640px
              440: {
                width: 440,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              // when window width is >= 991px
              991: {
                width: 991,
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/Logo-Rehamann-small.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/logo_bakertilly_small.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/Logo-Small-Incite.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/Logo-Small-proven.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/Logo-Small-summit.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/Logo-Small-thousand.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/Logo-Rehamann-small.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/logo_bakertilly_small.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="partner"
                src={"/images/partners/Logo-Small-Incite.png"}
                layout="responsive"
                height="80%"
                width="100%"
                objectFit="contain"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
