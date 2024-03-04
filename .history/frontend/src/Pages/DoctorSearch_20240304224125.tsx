import { IoSearchSharp } from "react-icons/io5";

const DoctorSearch: React.FC = () => {
  return (
    <section className="w-full h-[87vh] border-2 border-black">
      <article className="">
        <div className="flex border-2 border-black w-[30%] items-center relative h-[3rem] rounded-3xl overflow-clip">
          <input
            type="text"
            className="border-r-0 w-full h-full outline-none "
          />
          <IoSearchSharp className="absolute right-8" />
        </div>
      </article>
    </section>
  );
};

export default DoctorSearch;
