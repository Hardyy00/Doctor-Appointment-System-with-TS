import doctorImg01 from "../../assets/images/doctor-img01.jpg";
import { Doctor } from "../../assets/data/doctors";
import { useState } from "react";
import BookDoctor from "../../components/BookDoctor/BookDoctor";
import DoctorAbout from "../../components/DoctorAbout/DoctorAbout";
import DoctorFeedback from "../../components/DoctorFeedback/DoctorFeedback";
import Rating from "@mui/material/Rating";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUser } from "../../util/http";
import { useSelectorTyped } from "../../hooks/hooks";

const DoctorDescription: React.FC = () => {
  const [isAbout, setIsAbout] = useState<string>("About");

  const { id } = useParams();

  const role: string | undefined = useSelectorTyped(
    (state) => state.user?.role as string | undefined
  );

  const { data: doctor, isLoading } = useQuery({
    queryKey: ["doctor", id],
    queryFn: ({ signal }) => getUser({ signal, id, role }),
  });

  return (
    <section className="flex w-full max-md:flex-col md:px-[2rem] py-[2rem]">
      <div className="lg:w-[65%] lg:px-[6rem] w-full">
        <div className="flex items-center justify-start gap-[3rem]">
          <div className="h-[10rem] overflow-clip">
            <img src={doctorImg01} alt="" className="object-cover h-full" />
          </div>
          <div className="flex flex-col gap-[0.7rem] items-start justify-start">
            <h1 className="p-[1rem] text-irisBlueColor font-[800] bg-teal-200/60 rounded-lg w-full">
              {doctor.specialization}
            </h1>
            <h1 className="font-[800] text-[1.2rem]">{doctor.name}</h1>
            <div className="flex items-center justify-start">
              <Rating value={doctor?.averageRating} precision={0.2} readOnly />
              <p>{doctor.averageRating}</p>
            </div>

            <p className="align-bottom">{doctor.hospital}</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-[2rem] mt-[1rem] border-b-4 py-[0.4rem]">
          <button
            className={`${
              isAbout === "About"
                ? "border-2 rounded-lg bg-primaryColor text-white"
                : ""
            } p-[0.7rem] font-[600]`}
            onClick={() => setIsAbout("About")}
          >
            About
          </button>
          <button
            className={`${
              isAbout === "Feedback"
                ? "border-2 rounded-lg bg-primaryColor text-white"
                : ""
            } p-[0.7rem] font-[600]`}
            onClick={() => setIsAbout("Feedback")}
          >
            Feedback
          </button>
        </div>

        {/* about and feedback section */}
        <div className="w-full py-8">
          {isAbout === "About" && <DoctorAbout doctor={doctor} />}
          {isAbout === "Feedback" && <DoctorFeedback doctor={doctor} />}
        </div>
      </div>
      <div className="md:p-7 max-md:m-auto">
        <BookDoctor key={doctor.id} doctor={doctor} />
      </div>
    </section>
  );
};

export default DoctorDescription;
