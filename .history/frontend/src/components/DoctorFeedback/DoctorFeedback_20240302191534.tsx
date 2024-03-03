import { Doctor, Review } from "../../assets/data/doctors";
import { useRef, useState } from "react";
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
  const [value, setValue] = useState<number | null>(0);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = () => {
    console.log(value);
    console.log(feedbackRef.current?.value);
    setValue(0);

    if (feedbackRef.current) {
      feedbackRef.current.value = "";
    }
  };
  return (
    <div className="mt-[3rem] flex flex-col w-full gap-6">
      <div>
        <h3 className="font-[500] text-[1.1rem]">
          How would you like to rate the experience ?
        </h3>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, value) => setValue(value)}
          className="mt-4"
        />
      </div>

      <div>
        <h3 className="font-[500] text-[1.1rem]">
          Share your feedback and suggestions :
        </h3>
        <textarea
          name="feedback"
          id=""
          cols={""}
          rows={4}
          className="border-2 border-gray-300 p-4 mt-4 outline-none focus:outline-none text-textColor font-[500]"
          placeholder="Write Your Feedback"
          ref={feedbackRef}
        ></textarea>
      </div>

      <button className="btn w-[10rem] py-3" onClick={submitHandler}>
        Share
      </button>
    </div>
  );
};
export default DoctorFeedback;
