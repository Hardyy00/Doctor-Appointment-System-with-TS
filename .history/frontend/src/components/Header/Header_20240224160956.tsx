import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

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
    path: "/contact",
    name: "Contact",
  },
];

const Header: React.FC = () => {
  return (
    <section>
      <div className="container flex items-center justify-around">
        <div className="px-3">
          <img src={Logo} alt="" />
        </div>

        <div className="menu">
          <ul className="flex">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.path}>{item.name} </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
