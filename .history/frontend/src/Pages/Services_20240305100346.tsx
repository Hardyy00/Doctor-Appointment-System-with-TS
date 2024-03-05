import { services, Service } from "../assets/data/services";

const Services: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-3 gap-[2rem]"></div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return;
};

export default Services;
