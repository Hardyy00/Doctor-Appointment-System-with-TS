import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { ReactNode, useEffect } from "react";

const Layout: React.FC = () => {
  const dispatch = useDispatchTyped();
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies();
  const [isBook, setIsBook] = useState<boolean>(true);

  const user: User | undefined = useSelectorTyped(
    (state) => state.user as User | undefined
  );

  useEffect(() => {
    if (user) {
      return;
    }
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
