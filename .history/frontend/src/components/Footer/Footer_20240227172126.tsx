import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="w-full p-[1rem] flex">
      <div className="flex flex-col">
        <img src="" alt="" />
        <p>All rights are preserved.</p>
        <div className="flex gap-[4rem] items-center">
          <div className="icon_container border-black">
            <FaYoutube className="w-[8rem] h-[8rem]" />
          </div>
          <div className="icon_container border-black p-[1rem]">
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
