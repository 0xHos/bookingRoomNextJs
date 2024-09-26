"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IArtical } from "@/app/models/artical";

interface SwiperComponProps {
  articles: IArtical[];
}

export default function SwiperCompon({ articles }: SwiperComponProps) {
  return (
    <>
      <Swiper
        className="h-96"
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
      >
        {articles.map((artical: IArtical) => (
          <SwiperSlide key={artical._id}>
            <div>
              <img src={artical.image} className="w-full h-full object-cover" />
              <h1 className="absolute bottom-6 text-center bg-white   w-full py-10">
                {artical.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
