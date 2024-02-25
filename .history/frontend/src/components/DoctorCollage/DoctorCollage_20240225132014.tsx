import Doc from "../../assets/images/doc.jpg";
import Doc2 from "../../assets/images/doc2.avif";
import Doc3 from "../../assets/images/doc3.jpg";

const DoctorCollage: React.FC = () => {
  return (
    <div className="relative sm:flex sm:flex-col">
      <div className="w-[16rem] md:absolute rounded-xl right-[20rem] top-[10rem] z-10">
        <img
          src={Doc}
          alt=""
          className="w-[16rem] rounded-xl md:h-[22rem] h-[18rem]"
        />
      </div>

      <div className="w-[16rem] rounded-xl md:absolute right-[4rem] top-[12rem]">
        <img
          src={Doc2}
          alt=""
          className="w-[16rem] rounded-xl md:h-[16rem] h-[12rem]"
        />
      </div>

      <div className="w-[16rem] rounded-xl absolute right-[10rem] sm:top-[0]">
        <img
          src={Doc3}
          alt=""
          className="w-[16rem] rounded-xl h-[16rem] sm:h-[12rem] sm:top-[0rem]"
        />
      </div>
    </div>
  );
};

export default DoctorCollage;
