import React from "react";
import PatientAvatar from "../../assets/images/patient-avatar.png";
import Comment from "./Comment";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export type comment = {
  id: string;
  rating: number;
  name: string;
  image: string;
  comment: string;
};

const comments: comment[] = [
  {
    id: "c1",
    rating: 3,
    name: "Hardik Gaur",
    image: PatientAvatar,
    comment: "A perfect website for your health",
  },
];

const Carousel: React.FC = () => {
  return (
    <section className="flex flex-col w-full px-[6rem] py-[8rem] items-center justify-center gap-[1rem] text-center">
      <h1 className="text-[2.4rem] font-[800] w-[22rem] text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Our Great Doctors
      </h1>
      <p className="md:w-[28rem] text-textColor w-[22rem]">
        World-class care for everyone. Our health System offers unmatched,
        expert health care.
      </p>

      <div className="w-[70%] flex flex-col items-center">
        {/* {comments.map((item) => (
          <Comment key={item.id} comment={item} />
        ))} */}

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full"
        >
          <SwiperSlide>
            <Comment key={comments[0].id} comment={comments[0]} />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>

        {/* <div className="border-black border-2">1</div>
          <div>2</div>
          <div>3</div> */}
      </div>
    </section>
  );
};

export default Carousel;
