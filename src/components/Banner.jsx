import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="lg:mt-[50px]"
    >
      <Swiper
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Keyboard, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://i.ytimg.com/vi/0obDYVDa3mE/maxresdefault.jpg"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ytimg.com/vi/yfWWsIJGBgg/maxresdefault.jpg"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://metropolitan.realestate/wp-content/uploads/2022/03/June-2-4.jpg"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ytimg.com/vi/9r6PHHSUrso/maxresdefault.jpg"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.adsttc.com/media/images/5259/87c0/e8e4/4eff/0200/093f/large_jpg/albiziaHouse_92.jpg?1381599158"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
