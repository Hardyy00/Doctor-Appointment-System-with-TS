import { doctor } from "./DoctorDescription";

import {
  useForm,
  useFieldArray,
  SubmitHandler,
  FieldArrayWithId,
  UseFormRegister,
  UseFieldArrayRemove,
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
    place: string;
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

        <div className="flex flex-col gap-4">
          <label htmlFor="" className="block">
            Education *
          </label>

          {educationFields.map((item, index) => (
            <EducationDiv
              key={item.id}
              education={item}
              register={register}
              remove={removeEducation}
              index={index}
            />
          ))}

          <button
            className="btn_form"
            onClick={() =>
              appendEducation(
                {
                  startingDate: "",
                  endingDate: "",
                  place: "",
                  degree: "",
                },
                { focusName: "education.0.startingDate" }
              )
            }
          >
            Add Education
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="" className="block">
            Experience*
          </label>

          {experienceFields.map((item, index) => (
            <ExperienceDiv
              key={item.id}
              experience={item}
              index={index}
              register={register}
              remove={removeExperience}
            />
          ))}

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

        <div className="flex flex-col gap-4">
          <label htmlFor="" className="block">
            Time Slots
          </label>

          {timeFields.map((item, index) => (
            <TimeSlotDiv
              key={item.id}
              index={index}
              register={register}
              remove={removeTime}
            />
          ))}

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
  index: number;
  register: UseFormRegister<FormType>;
  remove: UseFieldArrayRemove;
}> = ({ education, index, register, remove }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-8 gap-y-4">
      <div>
        <label htmlFor="" className="block">
          Starting Date*
        </label>
        <input
          type="date"
          className="update_input"
          {...register(`education.${index}.startingDate` as const)}
        />
      </div>
      <div>
        <label htmlFor="" className="block">
          Ending Date*
        </label>
        <input
          type="date"
          className="update_input"
          {...register(`education.${index}.endingDate` as const)}
        />
      </div>

      <div>
        <label htmlFor="" className="block">
          Degree*
        </label>
        <input
          type="text"
          className="update_input"
          {...register(`education.${index}.degree` as const)}
        />
      </div>
      <div>
        <label htmlFor="" className="block">
          University
        </label>
        <input
          type="text"
          className="update_input"
          {...register(`education.${index}.place` as const)}
        />
      </div>

      <div className="">
        <div
          className="border w-[2.6em] h-[2.6rem] flex items-center justify-center rounded-[50%] bg-red-600"
          onClick={() => remove(index)}
        >
          <MdDelete className="text-white text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

const ExperienceDiv: React.FC<{
  experience: FieldArrayWithId<
    FormType,
    "education" | "experience" | "timeSlots",
    "id"
  >;
  index: number;
  register: UseFormRegister<FormType>;
  remove: UseFieldArrayRemove;
}> = ({ experience, register, index, remove }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-8 gap-y-4">
      <div>
        <label htmlFor="" className="block">
          Starting Date*
        </label>
        <input
          type="date"
          className="update_input"
          {...register(`experience.${index}.startingDate` as const)}
        />
      </div>
      <div>
        <label htmlFor="" className="block">
          Ending Date*
        </label>
        <input
          type="date"
          className="update_input"
          {...register(`experience.${index}.endingDate` as const)}
        />
      </div>

      <div>
        <label htmlFor="" className="block">
          Role*
        </label>
        <input
          type="text"
          className="update_input"
          {...register(`experience.${index}.role` as const)}
        />
      </div>
      <div>
        <label htmlFor="" className="block">
          Place
        </label>
        <input
          type="text"
          className="update_input"
          {...register(`experience.${index}.place` as const)}
        />
      </div>

      <div className="">
        <div
          className="border w-[2.6em] h-[2.6rem] flex items-center justify-center rounded-[50%] bg-red-600"
          onClick={() => remove(index)}
        >
          <MdDelete className="text-white text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

const TimeSlotDiv: React.FC<{
  register: UseFormRegister<FormType>;
  index: number;
  remove: UseFieldArrayRemove;
}> = ({ index, register, remove }) => {
  return (
    <div className="w-full grid grid-cols-3 gap-x-8 gap-y-4">
      <div>
        <label htmlFor="" className="block">
          Day*
        </label>
        <select
          className="update_input"
          {...register(`timeSlots.${index}.day` as const)}
        ></select>
      </div>
      <div>
        <label htmlFor="" className="block">
          Starting Time*
        </label>
        <input
          type="time"
          className="update_input"
          {...register(`timeSlots.${index}.startingTime` as const)}
        />
      </div>

      <div>
        <label htmlFor="" className="block">
          Ending Time*
        </label>
        <input
          type="time"
          className="update_input"
          {...register(`timeSlots.${index}.endingTime` as const)}
        />
      </div>

      <div className="">
        <div
          className="border w-[2.6em] h-[2.6rem] flex items-center justify-center rounded-[50%] bg-red-600"
          onClick={() => remove(index)}
        >
          <MdDelete className="text-white text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileUpdate;
