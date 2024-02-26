import Lottie from "lottie-react";
import fig from "../assets/images/si.json";

const Login: React.FC = () => {
  return (
    <div className="flex mx-auto w-full max-w-[80%] items-center  h-[38rem] mt-10 border-2 border-solid border-black">
      <div className="w-[50%] h-full border-black border-solid border-2">
        <Lottie animationData={fig} loop={false} />
      </div>
      <div className="">
        <div className="">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Login;
