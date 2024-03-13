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

  {
    id: "c1",
    rating: 3,
    name: "Hardik Gaur",
    image: PatientAvatar,
    comment: "A perfect website for your health",
  },

  {
    id: "c1",
    rating: 3,
    name: "Hardik Gaur",
    image: PatientAvatar,
    comment: "A perfect website for your health",
  },
  {
    id: "c1",
    rating: 3,
    name: "Hardik Gaur",
    image: PatientAvatar,
    comment: "A perfect website for your health",
  },
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
    <section className="flex flex-col w-full px-[6rem] py-[4rem] items-center justify-center gap-[1rem] text-center">
      <h1 className="text-[2.4rem] font-[800] w-[22rem] text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Our Great Doctors
      </h1>
      <p className="md:w-[28rem] text-textColor w-[22rem]">
        World-class care for everyone. Our health System offers unmatched,
        expert health care.
      </p>

      <div className="w-[70%] flex flex-col items-center">
        <Swiper spaceBetween={50} slidesPerView={3} className="w-full">
          {comments.map((item) => (
            <SwiperSlide id={item.id}>
              <Comment key={item.id} comment={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
