import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full p-[1rem] flex">
      <div className="flex flex-col">
        <img src="" alt="" />
        <p></p>
        <div>
          <div>
            <FaYoutube />
          </div>
          <div>
            <FaGithub />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="flex flex-col"></div>

      <div className="flex flex-col"></div>

      <div className="flex flex-col"></div>
    </div>
  );
};

export default Footer;
