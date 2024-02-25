import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Prof from "../../assets/images/profile.png";
import { TiThMenuOutline } from "react-icons/ti";
import { useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    console.log("clicked");
    console.log();
    menuRef.current!.classList.toggle("show__menu");
  };

  return (
    <section className="header flex items-center justify-center">
      <div className="container ">
        <div className="flex items-center justify-between gap-[1rem]">
          <div className="">
            <img src={Logo} alt="" />
          </div>

          <div className="navigation" ref={menuRef}>
            <ul className="menu flex items-center justify-center lg:gap-[4rem] md:gap-[2rem] ">
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

          <div className="flex items-center gap-4">
            <figure className="w-14 h-14 flex items-center rounded-full">
              <img src={Prof} alt="" className="rounded-full w-14 h-14 " />
            </figure>

            <Link to="/login">
              <button className="btn">Login</button>
            </Link>

            <div onClick={showMenu}>
              <TiThMenuOutline className="md:hidden w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
