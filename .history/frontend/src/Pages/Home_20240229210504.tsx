import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
  return (
    <section className="home w-full ">
      <Hero />

      <div className="">
        <h1>Providing the best medical Services</h1>
        <p>
          World-clas care for everyone. Our health System offers unmatched,
          expert health care.
        </p>

        <div className="card">
          <div className="">
            <div>
              <img src="" alt="" />
            </div>
            <h2>Find a Location</h2>

            <p>
              World-class care for everyone. Our health System offers unmatched,
              expert health care . From the lab to the clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
