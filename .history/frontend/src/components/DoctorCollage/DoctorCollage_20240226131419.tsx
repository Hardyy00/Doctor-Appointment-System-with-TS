import Doc from "../../assets/images/doc.jpg";
import Doc2 from "../../assets/images/doc2.avif";
import Doc3 from "../../assets/images/doc3.jpg";

const DoctorCollage: React.FC = () => {
  return (
    <div className="max-sm:grid-cols-1-3 ">
      <div>
        <img src={Doc} alt="" />
      </div>

      <div>
        <img src={Doc2} alt="" />
      </div>

      <div>
        <img src={Doc3} alt="" />
      </div>
    </div>
  );
};

export default DoctorCollage;
