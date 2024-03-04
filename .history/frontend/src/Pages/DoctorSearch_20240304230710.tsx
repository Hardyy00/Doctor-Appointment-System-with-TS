import { IoSearchSharp } from "react-icons/io5";

const DoctorSearch: React.FC = () => {
  return (
    <section className="w-full h-[87vh] border-2">
      <article className="w-full flex flex-col items-center justify-center gap-[3rem] p-[4rem]">
        <h1 className="font-[800] text-[2rem]">Find a Doctor</h1>
        <div className="flex w-[30%] items-center relative h-[3.5rem] rounded-3xl">
          <input
            type="text"
            className="w-full h-full outline-none active:outline-none focus:outline-none p-[1rem] text-[1.1rem] text-primaryColor font-[800] border-8 border-primaryColor focus:border-purple-500 focus:bg-white rounded-3xl transition duration-300 ease-in hover:bg-purple-300"
          />
          <IoSearchSharp className="absolute right-8 w-[1.6rem] h-[2rem]" />
        </div>
      </article>
    </section>
  );
};

export default DoctorSearch;
