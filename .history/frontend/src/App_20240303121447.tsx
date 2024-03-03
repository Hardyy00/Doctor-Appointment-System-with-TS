import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import { ReactNode, useEffect } from "react";

function App() {
  // createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       { path: "", element: <Home />, index: true },
  //       { path: "home", element: <Home /> },
  //       { path: "login", element: <Login /> },
  //       { path: "signup", element: <Signup /> },
  //       { path: "contact", element: <Contact /> },
  //       { path: "services", element: <Services /> },
  //       { path: "doctor-search", element: <DoctorSearch /> },
  //       { path: "doctor/:id", element: <DoctorDescription /> },
  //       { path: "profile", element: <Profile /> },
  //       { path: "doctor-profile", element: <DoctorProfile /> },
  //     ],
  //   },
  // ]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return (
    <ScrollToTop>
      <RouterProvider router={routes} />
    </ScrollToTop>
  );
}

const ScrollToTop: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default App;
