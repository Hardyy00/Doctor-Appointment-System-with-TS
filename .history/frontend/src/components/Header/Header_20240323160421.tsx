import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { useRef } from "react";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/hooks";
import { userActions } from "../../store/UserSlice";
import { useCookies } from "react-cookie";
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
  const [cookie, setCookies, removeCookies] = useCookies();
  const loc = useLocation();
  const locationPath = loc.pathname;

  const dispatch = useDispatchTyped();
  const isUserPresent: boolean = useSelectorTyped(
    (state) => state.user != null
  );
  const userImage: string | null | undefined = useSelectorTyped(
    (state) => state.user?.image
  );

  const role: string = useSelectorTyped((state) => state.user?.role as string);

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
            {userImage && (
              <Link
                to={role === "patient" ? "/profile" : "/"}
                className=""
                style={{
                  display:
                    locationPath === "/profile" || !role ? "none" : "block",
                }}
              >
                <figure className="w-12 h-12 md:w-12 md:h-12 flex items-center rounded-full">
                  <img
                    src={userImage}
                    alt=""
                    className="rounded-full w-12 h-12 object-cover "
                  />
                </figure>
              </Link>
            )}

            {!isUserPresent && (
              <Link to="/login" className="">
                <button className="btn">Login</button>
              </Link>
            )}

            {isUserPresent && (
              <Link to="#" className="">
                <button
                  className="btn"
                  onClick={() => {
                    removeCookies("jwt");
                    dispatch(userActions.logout());
                  }}
                  style={{
                    display:
                      locationPath === "/profile" || !role ? "none" : "block",
                  }}
                >
                  Logout
                </button>
              </Link>
            )}
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
