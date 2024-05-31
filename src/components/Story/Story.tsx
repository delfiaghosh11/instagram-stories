import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Story = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/450/800" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/450/810" />
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div>Current slide is {isActive ? "active" : "not active"}</div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default Story;
