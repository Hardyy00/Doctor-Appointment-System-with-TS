import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="w-full py-[1rem] px-[1rem] flex max-sm:flex-col border-black  border-2 items-center justify-around box-content">
      <div className="flex flex-col items-start gap-3 h-full">
        <img src={Logo} alt="" className="w-[8rem]" />
        <p>All rights are preserved.</p>
        <div className="flex gap-[2rem] items-center h-full">
          <div className="icon_container ">
            <FaYoutube />
          </div>
          <div className="icon_container">
            <FaGithub />
          </div>
          <div className="icon_container">
            <FaInstagram />
          </div>
          <div className="icon_container">
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full gap-4">
        <h3 className="">Quick Links</h3>
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="flex flex-col h-full gap-4">
        <h3>I want to : </h3>
        <ul className="list">
          <li>Find a Doctor</li>
          <li>Request an Appointment</li>
          <li>Find a Location</li>
          <li>Get an Opinion</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 h-[1rem] justify-end">
        <h3>Support</h3>
        <ul className="list">
          <li>Donate</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
