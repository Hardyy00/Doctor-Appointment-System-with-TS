import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { ReactNode, useEffect } from "react";
import { useDispatchTyped, useSelectorTyped } from "../hooks/hooks";
import { useCookies } from "react-cookie";
import { Doctor, User } from "../assets/data/doctors";
import axios from "axios";
import { userActions } from "../store/UserSlice";

const Layout: React.FC = () => {
  const dispatch = useDispatchTyped();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies();

  const user: User | Doctor | undefined = useSelectorTyped(
    (state) => state.user as User | undefined
  );

  useEffect(() => {
    if (user) {
      return;
    }
    console.log("use-effect");
    try {
      const verifyUser = async () => {
        const token: string | undefined = cookies.jwt;

        if (!token) {
          console.log("no token");
          navigate("/");
        } else {
          const { data } = await axios.get(import.meta.env.VITE_BASE_URI, {
            withCredentials: true,
          });

          if (data && !user) {
            dispatch(userActions.login(data));
          } else if (data.errors) {
            removeCookies("jwt");
          }
        }
      };

      verifyUser();
    } catch (err) {
      console.log(err);
    }
  }, [cookies, navigate, removeCookies, dispatch, user]);
  return (
    <>
      <ScrollToTop>
        <Header />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </>
  );
};

const ScrollToTop: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default Layout;
