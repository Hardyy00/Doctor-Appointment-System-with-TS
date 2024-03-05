import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";
import { services, Service } from "../assets/data/services";

const Services: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-3 gap-[2rem] w-full max-w-[80%] mx-auto mt-[3rem]">
        {services.map((item) => (
          <ServiceCard key={item.name} service={item} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div>
      <h2>{service.name}</h2>

      <p>{service.desc}</p>

      <div>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Services;
