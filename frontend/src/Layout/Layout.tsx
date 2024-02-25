import RoutesDefinition from "../Routes/RoutesDefinition";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <RoutesDefinition />
      <Footer />
    </>
  );
};

export default Layout;
