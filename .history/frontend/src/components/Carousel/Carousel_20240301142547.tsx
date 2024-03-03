import React from "react";
import ReactSwipe from "react-swipe";

const Carousel: React.FC = () => {
  let carouselRef: ReactSwipe | null;
  return (
    <section className="flex flex-col w-full px-[6rem] py-[8rem] items-center justify-center gap-[1rem] text-center">
      <h1 className="text-[2.4rem] font-[800] w-[22rem] text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Our Great Doctors
      </h1>
      <p className="md:w-[28rem] text-textColor w-[22rem]">
        World-class care for everyone. Our health System offers unmatched,
        expert health care.
      </p>

      <ReactSwipe
        className="carousel w-[70%] h-[30%]"
        swipeOptions={{ continuous: true }}
        ref={(ref) => (carouselRef = ref)}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ReactSwipe>

      <button onClick={() => carouselRef?.next()}>Next</button>
      <button onClick={() => carouselRef?.prev()}>Previous</button>
    </section>
  );
};

export default Carousel;
