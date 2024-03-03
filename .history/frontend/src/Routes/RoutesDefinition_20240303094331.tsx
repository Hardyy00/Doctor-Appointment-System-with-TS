import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import DoctorSearch from "../Pages/DoctorSearch";
import DoctorDescription from "../Pages/Doctor/DoctorDescription";
import Profile from "../Pages/Profile";
import DoctorProfile from "../Pages/Doctor/DoctorProfile";

const RoutesDefinition: React.FC = () => {
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
