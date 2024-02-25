const Home: React.FC = () => {
  return (
    <section className="home w-full h-[92vh]">
      <main className="flex items-center h-full justify-center gap-8">
        <div className="flex flex-col items-center justify-center md:w-[330px]">
          <h1 className="font-[800] text-[2.5rem]">
            Not Feeling Fine? Just Book a doctor.
          </h1>

          <p className="text-textColor">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            dignissimos repellendus, eius laborum ratione, dolorum suscipit rem
            nulla ipsum facere sequi nostrum autem excepturi culpa aut corrupti
            sed ex eveniet.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Home;
