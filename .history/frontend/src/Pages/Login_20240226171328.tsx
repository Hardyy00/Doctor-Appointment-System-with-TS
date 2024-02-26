import Lottie from "lottie-react";
import fig from "../assets/images/si.json";

const Login: React.FC = () => {
  return (
    <div className="flex mx-auto w-full max-w-[80%] items-center  h-[38rem] mt-10 border-2 border-solid border-black">
      <div className="w-[50%] h-full border-black border-solid border-2">
        <Lottie animationData={fig} loop={false} />
      </div>
      <div className="flex flex-col">
        <div className="">
          <input type="text" name="name" />
        </div>

        <div>
          <input type="email" name="email" />
        </div>

        <div>
          <input type="password" name="password" />
        </div>

        <div className="flex">
          <div>
            <label htmlFor="accountType">Are you a : </label>
            <select name="accountType" id="accountType">
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <div>
            <label htmlFor="gender">Gender: </label>
            <select name="gender" id="gender">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
