import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import banner1 from "../../../../assets/banner/banner1.png";
import banner2 from "../../../../assets/banner/banner2.png";
import banner3 from "../../../../assets/banner/banner3.png";
import { Autoplay } from "swiper/modules";

function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mt-10 rounded-4xl overflow-hidden"
    >
      <SwiperSlide>
        <img className="w-full h-auto" src={banner1} alt="carousel-banner-1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-auto" src={banner2} alt="carousel-banner-2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-auto" src={banner3} alt="carousel-banner-3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
