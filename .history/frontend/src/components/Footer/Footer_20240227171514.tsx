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
        <div className="flex gap-4rem items-center">
          <div className="7rem h-7rem rounded-[50%]">
            <FaYoutube />
          </div>
          <div className="7rem h-7rem rounded-[50%]">
            <FaGithub />
          </div>
          <div className="7rem h-7rem rounded-[50%]">
            <FaInstagram />
          </div>
          <div>
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
