import { Doctor, Review } from "../../assets/data/doctors";
import { useState } from "react";
import Star from "../../assets/images/Star.png";

const DoctorFeedback: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full">
      <h2 className="font-[800] text-[1.3rem]">
        Reviews ({doctor.reviews?.length})
      </h2>

      <div className="mt-[2rem] flex flex-col gap-4">
        {doctor.reviews?.map((item) => (
          <ReviewDiv key={item.id} review={item} />
        ))}
      </div>
    </div>
  );
};

const ReviewDiv: React.FC<{ review: Review }> = ({ review }) => {
  const images = [];

  for (let i = 0; i < review.rating; i++) {
    images.push(Star);
  }
  return (
    <div className=" w-[80%] flex flex-col gap-4 text-textColor">
      <div className="flex py-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-[3rem] w-[3rem]">
            <img
              src={review.user.image}
              alt=""
              className="object-cover h-full"
            />
          </div>
          <div>
            <h3>{review.user.name}</h3>
            <p>{review.timeStamp}</p>
          </div>
        </div>
        <div className="flex justify-self-auto">
          {images.map((item) => (
            <img src={item} className="h-[1rem] w-[1rem]"></img>
          ))}
        </div>
      </div>
      <div className="px-16">
        <p className="text-[1.1rem] font-[600]">{review.reviewText}</p>
      </div>
    </div>
  );
};
export default DoctorFeedback;
