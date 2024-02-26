import Doc from "../../assets/images/doc.jpg";
import Doc2 from "../../assets/images/doc2.avif";
import Doc3 from "../../assets/images/doc3.jpg";

const DoctorCollage: React.FC = () => {
  return (
    <div className="big grid-cols-2  grid gap-x-0">
      <div className="w-full max-sm:h-[14rem] w-full h-52">
        <img src={Doc} alt="" className="w-full max-sm:h-[14rem] h-52" />
      </div>

      <div className="max-sm:w-full max-sm:h-[14rem]">
        <img src={Doc2} alt="" className="max-sm:w-full max-sm:h-[14rem]" />
      </div>

      <div className="col-span-2 max-sm:w-full max-sm:h-[14rem] flex justify-center h-44">
        <img src={Doc3} alt="" className="max-sm:w-[full] max-sm:h-[14rem]" />
      </div>
    </div>
  );
};

export default DoctorCollage;
