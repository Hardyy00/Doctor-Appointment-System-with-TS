import Lottie from "lottie-react";
import { FaArrowDown } from "react-icons/fa";
import Animation from "../../assets/images/hero-animation.json";
const Hero: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row h-full justify-between gap-12 w-[100%] md:px-24 py-8 md:h-[90vh] lg:[90vh] home px-6">
      <div className="flex flex-col md:w-[40rem] gap-6 justify-around">
        <h1 className="font-[800] text-[3rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-[54px]">
          Not Feeling Fine?
          <br />
          Just Book a doctor.
        </h1>

        <p className="text-textColor font-[600] md:text-[20px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          dignissimos repellendus, eius laborum ratione, dolorum suscipit rem
          nulla ipsum facere sequi nostrum autem excepturi culpa aut corrupti
          sed ex eveniet.
        </p>

        <button className="btn w-[16rem] py-4">Book an Appointment</button>

        <div className="flex items-center gap-2">
          <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-[800] text-[3rem] max-sm:text-[2.3rem]">
            Explore us more{" "}
          </h2>

          <FaArrowDown className="max-sm:w-[2rem] max-sm:text-[1.5rem] mt-2 text-[1.8rem] text-primaryColor" />
        </div>
      </div>

      <div>
        <Lottie animationData={Animation} />
      </div>
    </main>
  );
};

export default Hero;
