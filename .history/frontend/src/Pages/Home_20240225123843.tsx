import Doc from "../assets/images/doc.jpg";
import Doc2 from "../assets/images/doc2.avif";
import Doc3 from "../assets/images/doc3.jpg";

const Home: React.FC = () => {
  return (
    <section className="home w-full h-[92vh]">
      <main className="flex flex-col md:flex-row h-full justify-between gap-8 w-[100%] md:px-24 py-8">
        <div className="flex flex-col md:w-[40rem]">
          <h1 className="font-[800] text-[3rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-[54px]">
            Not Feeling Fine? Just Book a doctor.
          </h1>

          <p className="text-textColor font-[600] md:text-[20px] mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            dignissimos repellendus, eius laborum ratione, dolorum suscipit rem
            nulla ipsum facere sequi nostrum autem excepturi culpa aut corrupti
            sed ex eveniet.
          </p>
        </div>

        <div className="md:relative sm:flex sm:flex-col">
          <div className="w-[16rem] absolute rounded-xl">
            <img src={Doc} alt="" className="w-[16rem] rounded-xl" />
          </div>

          <div className="w-[16rem] rounded-xl absolute">
            <img src={Doc2} alt="" className="w-[16rem] rounded-xl" />
          </div>

          <div className="w-[16rem] rounded-xl absolute -right-10">
            <img src={Doc3} alt="" className="w-[16rem] rounded-xl" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
