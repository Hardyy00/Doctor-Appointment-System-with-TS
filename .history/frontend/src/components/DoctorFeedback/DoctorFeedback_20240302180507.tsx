import { Doctor, Review } from "../../assets/data/doctors";
import { useState } from "react";

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
  return (
    <div className="border-2 border-black w-[80%]">{review.user.name}</div>
  );
};
export default DoctorFeedback;
