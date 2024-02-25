import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Prof from "../../assets/images/profile.png";
import { TiThMenuOutline } from "react-icons/ti";
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
    <section className="header flex items-center justify-center">
      <div className="container ">
        <div className="flex items-center justify-between gap-[1rem]">
          <div className="">
            <img src={Logo} alt="" />
          </div>

          <div className="menu">
            <ul className="flex items-center justify-center gap-[4rem]">
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primaryColor text-[16px] font-[600]"
                          : "text-textColor text-[16px] font-[600]"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4 sm:items-end">
            <figure className="w-14 h-14 flex items-center">
              <img src={Prof} alt="" />
            </figure>

            <div>
              <button className="btn">Login</button>
            </div>

            <div>
              <TiThMenuOutline className="md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
