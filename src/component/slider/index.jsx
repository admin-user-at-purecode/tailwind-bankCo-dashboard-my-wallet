import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ children, ...props }) {
  return (
    <Swiper {...props} modules={[]}>
      {children.map((child, index) => (
        <SwiperSlide key={index + "swiper"}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
