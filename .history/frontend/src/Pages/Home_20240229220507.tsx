import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { FaArrowRight } from "react-icons/fa";
import Location from "../assets/images/loc.svg";
import Question from "../assets/images/question.svg";

const Home: React.FC = () => {
  return (
    <section className="p-0 w-full">
      <Hero />

      <section className="flex flex-col w-full px-[6rem] py-[8rem] items-center justify-center gap-[1rem] text-center">
        <h1 className="text-[2rem] font-[800] w-[22rem] text-center">
          Providing the best medical Services
        </h1>
        <p className="w-[28rem]">
          World-clas care for everyone. Our health System offers unmatched,
          expert health care.
        </p>

        <div className="card_row flex mt-[5rem] w-full justify-between">
          <div className="card">
            <div className="h-[50%] w-full">
              <img
                src={Location}
                alt=""
                className="object-cover h-full m-auto"
              />
            </div>
            <h2 className="font-[800] text-[1.4rem]">Find a Location</h2>

            <p>
              World-class care for everyone. Our health System offers unmatched,
              expert health care . From the lab to the clinic.
            </p>

            <Link to="" className="">
              <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <div className="h-[50%] w-full">
              <img
                src={Question}
                alt=""
                className="object-cover h-full m-auto"
              />
            </div>

            <h2 className="font-[800] text-[1.4rem]">Find a Doctor</h2>
            <p>
              World-Class care for everyone. Our health System offers unmatched,
              expert health care. From the lab to the clinic.
            </p>
            <Link to="" className="">
              <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <div className="h-[50%] w-full">
              <img
                src={Location}
                alt=""
                className="object-cover h-full m-auto"
              />
            </div>

            <h2 className="font-[800] text-[1.4rem]">Book Appointment</h2>
            <p>
              World-class care for everyone. Our health System offers unmatched,
              expert health care . From the lab to the clinic.
            </p>
            <Link to="" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
