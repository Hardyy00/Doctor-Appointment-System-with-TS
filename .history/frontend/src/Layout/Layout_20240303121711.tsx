import RoutesDefinition from "../Routes/RoutesDefinition";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      {/* <RoutesDefinition /> */}
      <Footer />
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
