import { doctor } from "./DoctorDescription";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";

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
    position: string;
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

  const { educationFields, append, remove } = useFieldArray({
    name: "education",
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

          <button>Add Education</button>
        </div>
        <button className="btn w-[80%] self-center p-4 mt-4 font-[600] rounded-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default DoctorProfileUpdate;
