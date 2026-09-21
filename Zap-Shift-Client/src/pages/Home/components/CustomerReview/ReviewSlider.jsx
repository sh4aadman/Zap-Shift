import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import quoteIcon from "../../../../assets/reviewQuote.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomerReviews = () => {
  const swiperRef = useRef(null);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error("Failed to load customer reviews:", error);
      });
  }, []);

  return (
    <section className="w-full overflow-hidden py-12">
      <div className="mx-auto w-full max-w-7xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3.55}
          centeredSlides={true}
          spaceBetween={24}
          loop={true}
          speed={650}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".customer-review-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },

            640: {
              slidesPerView: 1.5,
              spaceBetween: 18,
            },

            768: {
              slidesPerView: 2.2,
              spaceBetween: 18,
            },

            1024: {
              slidesPerView: 3.55,
              spaceBetween: 18,
            },
          }}
          className="customer-review-swiper overflow-visible!"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              {({ isActive }) => (
                <div
                  className={`flex min-h-60 w-full flex-col rounded-3xl bg-white p-8 transition-all duration-500 ease-out ${
                    isActive
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-9 scale-[0.96] opacity-[0.22]"
                  }`}
                >
                  <img className="h-12 w-12" src={quoteIcon} alt="quote-icon" />
                  <p className="mt-2 font-medium text-base text-accent leading-7">
                    {review.review}
                  </p>
                  <hr className="mt-6 border-t border-dashed" />
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      className="h-12 w-12 shrink-0 rounded-full"
                      src={review.user_photoURL}
                    />
                    <div>
                      <h3 className="font-extrabold text-xl text-secondary">
                        {review.userName}
                      </h3>
                      <p className="mt-2 font-medium text-base text-accent">
                        {review.user_email}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-8 flex justify-center items-center gap-8">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 rounded-full bg-white shadow-sm hover:bg-primary"
        >
          <FaArrowLeft className="text-secondary text-xl" />
        </button>
        <div className="customer-review-pagination shrink! flex justify-center items-center gap-2" />
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 rounded-full bg-white shadow-sm hover:bg-primary"
        >
          <FaArrowRight className="text-secondary text-xl" />
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
