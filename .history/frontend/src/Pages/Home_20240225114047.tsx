const Home: React.FC = () => {
  return (
    <section className="home w-full h-[89.2vh]">
      <div className="container">
        <main className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center w-[50%]">
            <h1 className="font-[800] text-[2.5rem]">
              Not Feeling Fine? Just Book a doctor.
            </h1>

            <p className="text-textColor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              dignissimos repellendus, eius laborum ratione, dolorum suscipit
              rem nulla ipsum facere sequi nostrum autem excepturi culpa aut
              corrupti sed ex eveniet.
            </p>
          </div>

          <div className="w-[50%]">
            <h1 className="font-[800] text-[2.5rem]">
              Not Feeling Fine? Just Book a doctor.
            </h1>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Home;
