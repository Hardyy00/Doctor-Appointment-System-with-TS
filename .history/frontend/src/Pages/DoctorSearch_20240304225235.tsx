import { IoSearchSharp } from "react-icons/io5";

const DoctorSearch: React.FC = () => {
  return (
    <section className="w-full h-[87vh] border-2">
      <article className="w-full flex flex-col items-center justify-center gap-[3rem] p-[4rem]">
        <h1 className="font-[800] text-[2rem]">Find a Doctor</h1>
        <div className="flex items-center relative h-[3.5rem] rounded-3xl  focus::w-[40%]">
          <input
            type="text"
            className="border-r-0 w-full h-full outline-none active:outline-none focus:outline-none p-[1rem] text-[1.1rem] text-primaryColor font-[800] focus:border-2 focus: border-purple-500 rounded-3xl"
          />
          <IoSearchSharp className="absolute right-8 w-[1.6rem] h-[2rem]" />
        </div>
      </article>
    </section>
  );
};

export default DoctorSearch;
