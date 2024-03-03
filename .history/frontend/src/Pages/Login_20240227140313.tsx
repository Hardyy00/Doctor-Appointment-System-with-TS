import Lottie from "lottie-react";
import fig from "../assets/images/si.json";
import { ChangeEvent, useRef, useState } from "react";

const Login: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<File>();

  const avatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val: File | undefined = e.target?.files?.[0];

    if (val) {
      setImg(val);
    }
    // console.log(val);
  };
  return (
    <div className="flex max-sm:flex-col mx-auto w-full md:max-w-[70%] items-center  md:h-[34rem] mt-10  ">
      <div className="w-[80%] h-full">
        <Lottie animationData={fig} loop={false} className="h-full w-full" />
      </div>
      <div className="flex flex-col items-start justify-around p-8 h-full max-sm:justify-between w-full h-full gap-7">
        <h1 className="text-[1.5rem] font-[800]">
          Create an <span className=" text-primaryColor">Account</span>
        </h1>
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

        <div className="flex items-start justify-center">
          <div>
            <label htmlFor="accountType">Are you a : &nbsp;</label>
            <select name="accountType" id="accountType">
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <div className="">
            <div className="">
              <label htmlFor="gender">Gender: </label>
              <select name="gender" id="gender">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-6 h-12">
          <p className="font-[600]">Choose an Avatar : </p>

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

        <button className="btn w-full py-3">Sign Up</button>

        <p className="text-center w-full -mt-4">
          Already have an account?
          <span className=" text-primaryColor">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
