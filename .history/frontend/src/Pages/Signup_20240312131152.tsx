import Lottie from "lottie-react";
import fig from "../assets/images/si.json";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<File>();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    console.log(event.target);
  };

  const avatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val: File | undefined = e.target?.files?.[0];

    if (val) {
      setImg(val);
    }
  };
  return (
    <div className="flex max-sm:flex-col mx-auto w-full md:max-w-[70%] items-center  md:h-[34rem] mt-10 mb-10 ">
      <div className="w-[80%] h-full">
        <Lottie animationData={fig} loop={false} className="h-full w-full" />
      </div>
      <div className="flex flex-col items-start justify-around p-8 h-full max-sm:justify-between w-full  gap-7">
        <h1 className="text-[1.5rem] font-[800]">
          Create an <span className=" text-primaryColor">Account</span>
        </h1>
        <form
          action=""
          className="flex flex-col items-start justify-around h-full max-sm:justify-between w-full gap-4"
          onSubmit={submitHandler}
        >
          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="login_input"
            />
          </div>

          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login_input"
            />
          </div>

          <div className="input-row">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login_input"
            />
          </div>

          <div className="flex items-start justify-between w-full">
            <div className="w-[50%]">
              <label htmlFor="accountType" className="font-[500]">
                Are you a : &nbsp;
              </label>
              <select name="role" id="accountType" className="select">
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="gender" className="font-[500]">
                Gender:
              </label>
              <select name="gender" id="gender" className="select">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex w-full items-center gap-6 h-12">
            <p className="font-[600] ">Choose an Avatar : </p>

            <div
              className="w-12 h-full rounded-[2rem] cursor-pointer"
              style={{ backgroundColor: img ? "white" : "blue" }}
              onClick={() => inputRef.current!.click()}
            >
              {img && (
                <img
                  src={URL.createObjectURL(img)}
                  alt="Profile avatar"
                  className="object-cover w-12 h-full rounded-[2rem]"
                />
              )}
            </div>

            <input
              type="file"
              name="avatar"
              className="hidden"
              ref={inputRef}
              onChange={avatarHandler}
            />
          </div>

          <button className="btn w-[80%] py-3 mx-auto">Sign Up</button>
        </form>

        <p className="text-center w-full -mt-4">
          Already have an account?
          <Link to="/login">
            <span className=" text-primaryColor font-[600]">&nbsp;Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
