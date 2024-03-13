import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Prof from "../../assets/images/profile.png";
import { TiThMenuOutline } from "react-icons/ti";
import { useRef } from "react";
import { useSelectorTyped } from "../../hooks/hooks";
import { User } from "../../assets/data/doctors";
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
  const user: { user: User } = useSelectorTyped((state) => state.user);

  console.log();
  const role: string = "patient";
  const menuRef = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    menuRef.current!.classList.toggle("show__menu");
  };

  return (
    <section className="header flex items-center justify-center px-[1rem] py-[0.6rem]">
      <div className="container">
        <div className="flex items-center justify-between gap-[1rem]">
          <div className="">
            <img src={Logo} alt="" />
          </div>

          <div className="navigation" ref={menuRef} onClick={showMenu}>
            <ul className="menu flex items-center justify-center lg:gap-[4rem] md:gap-[2rem] ">
              {role === "patient" &&
                navLinks.map((item, index) => {
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

              {role !== "patient" && (
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] font-[600]"
                        : "text-textColor text-[16px] font-[600]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <Link to={role === "patient" ? "/profile" : "/"} className="">
              <figure className="w-12 h-12 md:w-12 md:h-12 flex items-center rounded-full">
                <img src={Prof} alt="" className="rounded-full w-12 h-12 " />
              </figure>
            </Link>

            <Link to="/login" className="">
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
