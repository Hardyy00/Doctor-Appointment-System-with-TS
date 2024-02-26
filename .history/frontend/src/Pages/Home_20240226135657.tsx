import DoctorCollage from "../components/DoctorCollage/DoctorCollage";

const Home: React.FC = () => {
  return (
    <section className="home w-full ">
      <main className="flex flex-col md:flex-row h-full justify-between gap-8 w-[100%] md:px-24 py-8 md:h-[90vh] lg:[90vh]">
        <div className="flex flex-col md:w-[40rem] gap-4">
          <h1 className="font-[800] text-[3rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-[54px]">
            Not Feeling Fine? Just Book a doctor.
          </h1>

          <p className="text-textColor font-[600] md:text-[20px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            dignissimos repellendus, eius laborum ratione, dolorum suscipit rem
            nulla ipsum facere sequi nostrum autem excepturi culpa aut corrupti
            sed ex eveniet.
          </p>

          <button className="btn w-[16rem] py-7">Book an Appointment</button>
        </div>

        <DoctorCollage />
      </main>
    </section>
  );
};

export default Home;
