import { useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import { ReactNode, useEffect } from "react";

function App() {
  return (
    <ScrollToTop>
      <Layout />
    </ScrollToTop>
  );
}

const ScrollToTop: React.FC = ({ children }): ReactNode | null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return { children } || null;
};

export default App;
