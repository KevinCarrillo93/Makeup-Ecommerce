import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { ProductCard } from "../ProductCard/ProductCard"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export const SwiperComponent = ({ array }) => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#FBA744",
          "--swiper-pagination-bullet-inactive-color": "#556353",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {array?.map((p, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={`/details/${p.id}`}>
                <ProductCard
                  name={p.name}
                  price={p.price}
                  image_link={p.api_featured_image}
                  rating={p.rating}
                  discount={p.discount}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
