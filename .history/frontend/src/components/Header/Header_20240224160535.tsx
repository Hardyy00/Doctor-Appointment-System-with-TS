import Log from "../../assets/images/log.png";

const navLinks = [
  {
    path: "/home",
    name: "Home",
  },

  {
    path: "/services",
    name: "Services",
  },

  {
    path: "/doctor-search",
    name: "Find a Doctor",
  },

  {
    contact: "/contact",
    name: "Contact",
  },
];

const Header: React.FC = () => {
  return (
    <section>
      <div className="container flex items-center">
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
