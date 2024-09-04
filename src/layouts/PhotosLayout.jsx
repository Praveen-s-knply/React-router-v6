import { useOutletContext } from "react-router-dom";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Component
export default function PhotosLayout() {
  const product = useOutletContext();

  const swiperSlideElem = product.imageUrls.map((url) => {
    return (
      <SwiperSlide key={url}>
        <img src={`${process.env.PUBLIC_URL + "/assets/images/" + url}`} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      navigation
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
    >
      {swiperSlideElem}
    </Swiper>
  );
}
