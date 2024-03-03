import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="w-full py-[1rem] px-[3rem] flex max-sm:flex-col border-black  border-2 items-center justify-around">
      <div className="flex flex-col items-start gap-3">
        <img src={Logo} alt="" className="w-[8rem]" />
        <p>All rights are preserved.</p>
        <div className="flex gap-[2rem] items-center">
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

      <div className="flex flex-col">
        <h3 className="mb-8">Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3>I want to : </h3>
        <ul>
          <li>Find a Doctor</li>
          <li>Request an Appointment</li>
          <li>Find a Location</li>
          <li>Get an Opinion</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3>Support</h3>
        <ul>
          <li>Donate</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
