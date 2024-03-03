import doctorImg01 from "../../assets/images/doctor-img01.png";
import { Doctor } from "../../assets/data/doctors";
import Star from "../../assets/images/Star.png";
import { useState } from "react";
import BookDoctor from "../../components/BookDoctor/BookDoctor";
import DoctorAbout from "../../components/DoctorAbout/DoctorAbout";
import DoctorFeedback from "../../components/DoctorFeedback/DoctorFeedback";

const DoctorDescription: React.FC = () => {
  const doctor: Doctor = {
    id: "01",

    name: "Dr. Alfaz Ahmed",
    specialization: "Surgeon",
    averageRating: 4.8,
    totalRating: 272,
    image: doctorImg01,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    timeSlots: [
      { day: "sunday", time: "4:30 pm - 9:30 pm" },
      { day: "Monday", time: "4:30 pm - 9:30 pm" },
    ],
    ticketPrice: 800,
    about:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    education: [
      {
        from: 2021,
        to: 2025,
        degree: "Btech in Computer Science",
        place: "GLA University",
      },

      {
        from: 2013,
        to: 2017,
        degree: "Neurologist",
        place: "London",
      },

      {
        from: 2018,
        to: 2022,
        degree: "Sweeping",
        place: "USA",
      },
    ],
    experience: [
      {
        from: 2017,
        to: 2019,
        role: "Associate Professor",
        place: "Mount Adora Hospital, Sylhet",
      },
    ],
  };

  const [isAbout, setIsAbout] = useState<string>("About");
  return (
    <section className="flex w-full max-md:flex-col md:px-[2rem] py-[2rem]">
      <div className="lg:w-[65%] lg:px-[6rem] w-full">
        <div className="flex items-center justify-start gap-[3rem]">
          <div className="h-[10rem]">
            <img src={doctor.image} alt="" className="object-cover h-full" />
          </div>
          <div className="flex flex-col gap-[0.7rem] items-start justify-start">
            <p className="p-[1rem] text-irisBlueColor font-[800] bg-teal-200/60 rounded-lg w-[50%]">
              {doctor.specialization}
            </p>
            <h1 className="font-[800] text-[1.2rem]">{doctor.name}</h1>
            <div className="flex items-center justify-start">
              <img src={Star} alt="" />
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
