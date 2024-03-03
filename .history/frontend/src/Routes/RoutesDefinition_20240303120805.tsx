import {
  Route,
  RouteObject,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import DoctorSearch from "../Pages/DoctorSearch";
import DoctorDescription from "../Pages/Doctor/DoctorDescription";
import Profile from "../Pages/Profile";
import DoctorProfile from "../Pages/Doctor/DoctorProfile";
import Layout from "../Layout/Layout";

const RoutesDefinition: React.FC = () => {
  //   createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Layout />,
  //       children: [
  //         { path: "", element: <Home />, index: true },
  //         { path: "home", element: <Home /> },
  //         { path: "login", element: <Login /> },
  //         { path: "signup", element: <Signup /> },
  //         { path: "contact", element: <Contact /> },
  //         { path: "services", element: <Services /> },
  //         { path: "doctor-search", element: <DoctorSearch /> },
  //         { path: "doctor/:id", element: <DoctorDescription /> },
  //         { path: "profile", element: <Profile /> },
  //         { path: "doctor-profile", element: <DoctorProfile /> },
  //       ],
  //     },
  //   ]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctor-search" element={<DoctorSearch />} />
      <Route path="/doctor/:id" element={<DoctorDescription />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/doctor-profile" element={<DoctorProfile />} />
    </Routes>
  );
};

export default RoutesDefinition;
