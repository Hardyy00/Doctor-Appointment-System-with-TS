const Home: React.FC = () => {
  return (
    <section className="home w-full h-[92vh]">
      <main className="flex flex-col md:flex-row h-full justify-between gap-8 w-[100%] md:px-24 py-8">
        <div className="flex flex-col md:w-[40rem]">
          <h1 className="font-[800] text-[3rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-[54px]">
            Not Feeling Fine? Just Book a doctor.
          </h1>

          <p className="text-textColor font-[600] text-[20px] mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            dignissimos repellendus, eius laborum ratione, dolorum suscipit rem
            nulla ipsum facere sequi nostrum autem excepturi culpa aut corrupti
            sed ex eveniet.
          </p>
        </div>

        <div>
          <h1> Heiil</h1>
        </div>
      </main>
    </section>
  );
};

export default Home;
