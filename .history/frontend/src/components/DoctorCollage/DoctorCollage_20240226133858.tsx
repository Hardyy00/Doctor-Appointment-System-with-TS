import Doc from "../../assets/images/doc.jpg";
import Doc2 from "../../assets/images/doc2.avif";
import Doc3 from "../../assets/images/doc3.jpg";

const DoctorCollage: React.FC = () => {
  return (
    <div className="big max-sm:grid-cols-2  max-sm:grid max-sm:gap-x-0">
      <div className="max-sm:w-full max-sm:h-[14rem] w-full">
        <img src={Doc} alt="" className="max-sm:w-full max-sm:h-[14rem]" />
      </div>

      <div className="max-sm:w-full max-sm:h-[14rem]">
        <img src={Doc2} alt="" className="max-sm:w-full max-sm:h-[14rem]" />
      </div>

      <div className="max-sm:col-span-2 max-sm:w-full max-sm:h-[14rem] max-sm:flex max-sm:justify-center">
        <img src={Doc3} alt="" className="max-sm:w-[full] max-sm:h-[14rem]" />
      </div>
    </div>
  );
};

export default DoctorCollage;
