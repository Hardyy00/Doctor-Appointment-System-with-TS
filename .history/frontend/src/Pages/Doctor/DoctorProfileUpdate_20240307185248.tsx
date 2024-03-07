import { doctor } from "./DoctorDescription";

import {
  useForm,
  useFieldArray,
  SubmitHandler,
  FieldArrayWithId,
} from "react-hook-form";
import { MdDelete } from "react-icons/md";

enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

type FormType = {
  name: string;
  email: string;
  phone: string;
  bio: string;
  gender: Gender;
  specialization: string;
  ticketPrice: number;

  education: {
    startingDate: string;
    endingDate: string;
    degree: string;
    university: string;
  }[];

  experience: {
    startingDate: string;
    endingDate: string;
    role: string;
    place: string;
  }[];

  timeSlots: {
    day: string;
    startingTime: string;
    endingTime: string;
  }[];
};

const DoctorProfileUpdate = () => {
  const { register, control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      name: doctor.name,
      email: doctor.email ?? "",
      phone: doctor.phone ?? "",
      bio: doctor.bio ?? "",
      gender: doctor.gender,
      specialization: doctor.specialization,
      ticketPrice: doctor.ticketPrice,
      education: doctor.education,
      experience: doctor.experience,
      timeSlots: doctor.timeSlots,
    },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray<FormType>({
    name: "education",
    control,
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray<FormType>({
    name: "experience",
    control,
  });

  const {
    fields: timeFields,
    append: appendTime,
    remove: removeTime,
  } = useFieldArray<FormType>({
    name: "timeSlots",
    control,
  });

  const submitForm: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full text-textColor">
      <h1 className="font-[800] text-[1.2rem]">Profile Information</h1>

      <form
        action=""
        className="w-full flex flex-col gap-4 mt-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="input-row">
          <label htmlFor="" className="block">
            Name*
          </label>
          <input
            type="text"
            className="update_input"
            placeholder="Name"
            {...register("name")}
          />
        </div>

        <div className="">
          <label htmlFor="" className="block">
            Email*
          </label>
          <input
            type="email"
            className="update_input"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
        </div>

        <div>
          <label htmlFor="" className="block">
            Phone*
          </label>
          <input
            type="number"
            className="update_input"
            placeholder="Phone no"
            {...register("phone")}
          />
        </div>

        <div>
          <label htmlFor="" className="block">
            Bio*
          </label>
          <input
            type="text"
            className="update_input"
            placeholder="Bio"
            {...register("bio", {
              required: { value: true, message: "Bio is required" },
            })}
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <div className=" ">
            <label htmlFor="" className="block">
              Gender
            </label>
            <select
              id=""
              className="update_select"
              {...register("gender", {
                required: { value: true, message: "Gender is required" },
              })}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="">
            <label htmlFor="specialization" className="block">
              Specialization*
            </label>
            <select
              id="specialization"
              className="update_select"
              {...register("specialization", {
                required: {
                  value: true,
                  message: "Specialization is required",
                },
              })}
            >
              <option value="">Select</option>
              <option value="Surgeon">Surgeon</option>
              <option value="Neurosurgeon">NeuroSurgeon</option>
            </select>
          </div>

          <div>
            <label htmlFor="" className="block">
              Ticket Price*
            </label>
            <input
              type="number"
              defaultValue={doctor.ticketPrice ?? 0}
              className="update_select"
              name="ticketPrice"
            />
          </div>
        </div>

        <div>
          <label htmlFor="" className="block">
            Education *
          </label>

          {educationFields.map((item, index) => (
            <EducationDiv key={item.id} education={item} />
          ))}

          <button
            className="btn_form"
            onClick={() =>
              appendEducation({
                startingDate: "",
                endingDate: "",
                university: "",
                degree: "",
              })
            }
          >
            Add Education
          </button>
        </div>

        <div>
          <label htmlFor="" className="block">
            Experience*
          </label>

          <button
            className="btn_form"
            onClick={() =>
              appendExperience({
                startingDate: "",
                endingDate: "",
                role: "",
                place: "",
              })
            }
          >
            Add Experience
          </button>
        </div>

        <div>
          <label htmlFor="" className="block">
            Time Slots
          </label>

          <button
            className="btn_form"
            onClick={() =>
              appendTime({
                day: "",
                startingTime: "",
                endingTime: "",
              })
            }
          >
            Add Time Slot
          </button>
        </div>
        <button className="btn w-[80%] self-center p-4 mt-4 font-[600] rounded-md">
          Update
        </button>
      </form>
    </div>
  );
};

const EducationDiv: React.FC<{
  education: FieldArrayWithId<
    FormType,
    "education" | "experience" | "timeSlots",
    "id"
  >;
}> = ({ education }) => {
  return (
    <div className="w-full grid grid-cols-2">
      <div>
        <label htmlFor="" className="block">
          Starting Date*
        </label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="" className="block">
          Ending Date*
        </label>
        <input type="date" />
      </div>

      <div>
        <label htmlFor="" className="block">
          Degree*
        </label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="" className="block">
          University
        </label>
        <input type="text" />
      </div>

      <div className="">
        <div className="border w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-red-600">
          <MdDelete className="text-white text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileUpdate;
