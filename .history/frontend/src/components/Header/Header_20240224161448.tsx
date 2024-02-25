import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Prof from "../../assets/images/profile.png";
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

        <div className="">
          <figure>
            <img src="" alt="" />
          </figure>

          <div>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
