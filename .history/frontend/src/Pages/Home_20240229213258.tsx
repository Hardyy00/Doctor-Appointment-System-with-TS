import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <section className="p-0 w-full">
      <Hero />

      <section className="flex flex-col w-full">
        <h1>Providing the best medical Services</h1>
        <p>
          World-clas care for everyone. Our health System offers unmatched,
          expert health care.
        </p>

        <div className="card_row flex">
          <div className="card">
            <div>
              <img src="" alt="" />
            </div>
            <h2>Find a Location</h2>

            <p>
              World-class care for everyone. Our health System offers unmatched,
              expert health care . From the lab to the clinic.
            </p>

            <Link to="" className="">
              <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <div>
              <img src="" alt="" />
            </div>

            <h2>Find a Doctor</h2>
            <p>
              World-Class care for everyone. Our health System offers unmatched,
              expert health care. From the lab to the clinic.
            </p>
            <Link to="" className="">
              <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <div>
              <img src="" alt="" />
            </div>

            <h2>Book Appointment</h2>
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
