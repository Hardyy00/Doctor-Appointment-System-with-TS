import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="w-full py-[1rem] px-[3rem] flex border-black border-2">
      <div className="flex flex-col">
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

      <div className="flex flex-col"></div>

      <div className="flex flex-col"></div>

      <div className="flex flex-col"></div>
    </div>
  );
};

export default Footer;
