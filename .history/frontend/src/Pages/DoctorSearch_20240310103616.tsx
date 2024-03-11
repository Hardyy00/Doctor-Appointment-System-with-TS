import { IoSearchSharp } from "react-icons/io5";
import doctors from "../assets/data/doctors";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDoctors } from "../util/http";
const DoctorSearch: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: [searchTerm],
  //   queryFn: () => fe,
  //   enabled: searchTerm !== undefined,
  // });

  const searchHandler = () => {
    if (searchRef.current && searchRef.current.value) {
      const searchString: string = searchRef.current.value;
      const url: string = import.meta.env.VITE_BASE_URI;
    }
  };

  return (
    <section className="w-full p-0">
      <article className="w-full flex flex-col items-center justify-center gap-[3rem] md:p-[4rem] py-[4rem] px-[0.8rem] bg-gradient-to-r from-rose-400 to-red-500">
        <h1 className="font-[800] text-[2rem] text-white">Find a Doctor</h1>
        <div className="flex lg:w-[35%] items-center relative h-[3.5rem] rounded-3xl md:w-[80%] w-[100%]">
          <input
            type="text"
            className="w-full h-full outline-none active:outline-none focus:outline-none p-[1rem] text-[1.1rem] text-primaryColor font-[800] border-[0.3rem] border-primaryColor focus:border-purple-500 focus:bg-white focus:placeholder:text-red-300 rounded-3xl transition duration-300 ease-in hover:bg-purple-300/50 placeholder:text-red-300  hover:placeholder:text-white tracking-wider"
            placeholder="Search for a Doctor"
            ref={searchRef}
          />
          <IoSearchSharp
            className="absolute right-8 w-[1.6rem] h-[2rem] hover:cursor-pointer hover:scale-125 transition duration-300 hover:text-teal-500 active:scale-90"
            onClick={searchHandler}
          />
        </div>
      </article>

      <article className="py-[3rem]  px-[1rem] g:px-[4rem] w-full">
        {!data ||
          (data.length == 0 && (
            <div className="font-[800] text-[2rem] text-center text-primaryColor mb-[18rem]">
              Search a Doctor
            </div>
          ))}
        {data && data.length > 0 && (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-10 gap-x-4 place-items-center">
            {doctors.map((item) => (
              <DoctorCard key={item.id} doctor={item} />
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default DoctorSearch;
