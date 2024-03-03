import Doc from "../assets/images/doc.jpg";
import Doc2 from "../assets/images/doc2.avif";
import Doc3 from "../assets/images/doc3.jpg";

const DoctorCollage: React.FC = () => {
  return (
    <div className="md:relative sm:flex sm:flex-col">
      <div className="w-[16rem] md:absolute rounded-xl">
        <img src={Doc} alt="" className="w-[16rem] rounded-xl" />
      </div>

      <div className="w-[16rem] rounded-xl md:absolute">
        <img src={Doc2} alt="" className="w-[16rem] rounded-xl" />
      </div>

      <div className="w-[16rem] rounded-xl md:absolute -right-10">
        <img src={Doc3} alt="" className="w-[16rem] rounded-xl" />
      </div>
    </div>
  );
};

export default DoctorCollage;