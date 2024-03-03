import React from "react";
import ReactSwipe from "react-swipe";
import PatientAvatar from "../../assets/images/patient-avatar.png";
import Comment from "./Comment";

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

      {/* <div className="w-[70%] flex"> */}
      <ReactSwipe
        className="h-[30%] w-[40%]"
        swipeOptions={{ continuous: true }}
        ref={(ref) => (carouselRef = ref)}
        childCount={comments.length}
      >
        {comments.map((item) => (
          <Comment key={item.id} comment={item} />
        ))}

        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ReactSwipe>

      <button onClick={() => carouselRef?.next()}>Next</button>
      <button onClick={() => carouselRef?.prev()}>Previous</button>
      {/* </div> */}
    </section>
  );
};

export default Carousel;