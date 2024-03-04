import { IoSearchSharp } from "react-icons/io5";

const DoctorSearch: React.FC = () => {
  return (
    <section className="w-full h-[87vh] border-2 border-black">
      <article className="">
        <div>
          <input type="text" />
          <IoSearchSharp />
        </div>
      </article>
    </section>
  );
};

export default DoctorSearch;
