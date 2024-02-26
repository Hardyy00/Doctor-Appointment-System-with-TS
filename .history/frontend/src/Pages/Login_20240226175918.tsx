import Lottie from "lottie-react";
import fig from "../assets/images/si.json";

const Login: React.FC = () => {
  return (
    <div className="flex mx-auto w-full max-w-[70%] items-center  h-[34rem] mt-10 border-2 border-solid border-black ">
      <div className="w-[50%] h-full border-black border-solid border-2">
        <Lottie animationData={fig} loop={false} />
      </div>
      <div className="flex flex-col items-center justify-around p-8 h-full">
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

        <div>
          <button>Choose an Avatar</button>
          <input type="file" name="avatar" />
        </div>

        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
