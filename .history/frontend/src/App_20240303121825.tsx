import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";

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
  return <RouterProvider router={routes} />;
}

export default App;
