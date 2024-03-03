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
import MyBookings from "./components/profile-components/MyBookings";
import Settings from "./components/profile-components/Settings";

function App() {
  const routes = createBrowserRouter([
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
          children: [
            { path: "", element: <MyBookings />, index: true },
            { path: "settings", element: <Settings /> },
          ],
        },
        { path: "doctor-profile", element: <DoctorProfile /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
