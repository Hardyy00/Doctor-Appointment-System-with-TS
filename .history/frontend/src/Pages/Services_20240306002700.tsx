import { FaArrowRight } from "react-icons/fa";
import { services, Service } from "../assets/data/services";

const Services: React.FC = () => {
  return (
    <section className="w-full ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[3rem] w-full max-w-[80%] mx-auto mt-[3rem] mb-[10rem]">
        {services.map((item, index) => (
          <ServiceCard key={index + 1} service={item} index={index + 1} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <div className="flex flex-col gap-4 text-textColor">
      <h2 className="font-[800] text-[1.2rem]">{service.name}</h2>

      <p className="text-[0.9rem]">{service.desc}</p>

      <div className="flex items-center justify-between h-[2rem]">
        <div className="border-2 border-black h-[2.5rem] w-[2.5rem] rounded-[50%] flex items-center justify-center">
          <FaArrowRight />
        </div>
        <p className={`h-full  w-[2rem] flex items-center justify-center`}>
          {index}
        </p>
      </div>
    </div>
  );
};

export default Services;
