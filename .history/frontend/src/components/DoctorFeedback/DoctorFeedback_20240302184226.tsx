import { Doctor, Review } from "../../assets/data/doctors";
import { useState } from "react";
import Star from "../../assets/images/Star.png";
import Rating from "@mui/material/Rating";

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

      {!open && (
        <div className="w-full text-center mt-[2rem]">
          <button
            className="btn p-[1rem] px-[1.2rem]"
            onClick={() => setOpen((pre) => !pre)}
          >
            Give Feedback
          </button>
        </div>
      )}

      {open && <GiveFeedback />}
    </div>
  );
};

const ReviewDiv: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className=" w-[80%] flex flex-col gap-4 text-textColor">
      <div className="flex py-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-[3rem] w-[3rem] rounded-[50%] overflow-clip">
            <img
              src={review.user.image}
              alt=""
              className="object-cover h-full rounded-[50%]"
            />
          </div>
          <div>
            <h3 className="font-[800] text-primaryColor">{review.user.name}</h3>
            <p className="text-[80%]">{review.timeStamp}</p>
          </div>
        </div>
        <Rating name="read-only" value={review.rating} readOnly />
      </div>
      <div className="px-16">
        <p className="text-[1.1rem] font-[500]">{review.reviewText}</p>
      </div>
    </div>
  );
};

const GiveFeedback: React.FC = () => {
  const [value, setValue] = useState<number>(null);
  return (
    <div>
      <div>
        <h3>How would you like to rate the experience ?</h3>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, value) => setValue(value)}
        />
      </div>
    </div>
  );
};
export default DoctorFeedback;
