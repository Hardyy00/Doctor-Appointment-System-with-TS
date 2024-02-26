import Lottie from "lottie-react";
import fig from "../assets/images/si.json";

const Login: React.FC = () => {
  return (
    <div className="flex mx-auto w-full max-w-[80%] items-center justify-center h-[40rem] mt-10">
      <div className="flex">
        <Lottie animationData={fig} />
      </div>
      <div>hii</div>
    </div>
  );
};

export default Login;
