import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { ReactNode, useEffect } from "react";

const Layout: React.FC = () => {
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
