import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import DoctorSearch from "./Pages/DoctorSearch";
import DoctorDescription from "./Pages/Doctor/DoctorDescription";
import Profile from "./Pages/Profile";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";
import Appointments from "./Pages/Doctor/Appointments";

function App() {
  const role: string = "doctor";

  const routesDoctor = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <DoctorProfile />,
          children: [
            { path: "/appointments", element: <Appointments /> },
            { path: "/profile" },
          ],
        },
      ],
    },
  ]);
  const routesPatient = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home />, index: true },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "contact", element: <Contact /> },
        { path: "services", element: <Services /> },
        { path: "doctor-search", element: <DoctorSearch /> },
        { path: "doctor/:id", element: <DoctorDescription /> },
        {
          path: "profile",
          element: <Profile />,
        },
        { path: "doctor-profile", element: <DoctorProfile /> },
      ],
    },
  ]);
  return (
    <RouterProvider
      router={role === "patient" ? routesPatient : routesDoctor}
    />
  );
}

export default App;
