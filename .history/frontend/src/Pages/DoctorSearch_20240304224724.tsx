import { IoSearchSharp } from "react-icons/io5";

const DoctorSearch: React.FC = () => {
  return (
    <section className="w-full h-[87vh] border-2">
      <article className="w-full flex items-center justify-center">
        <div className="flex border-2 w-[30%] items-center relative h-[3rem] rounded-3xl overflow-clip">
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
