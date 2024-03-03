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

      <div className="">
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
    <div className="border-2 border-black w-[80%]">
      <div>
        <div>
          <img src={review.user.image} alt="" />
        </div>
        <div>
          <h3>{review.user.name}</h3>
          <p>{review.timeStamp}</p>
        </div>
        <div>{images}</div>
      </div>
      <div></div>
    </div>
  );
};
export default DoctorFeedback;
