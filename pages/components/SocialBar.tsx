import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const SocialBar = () => {
  return (
    <div className="absolute bottom-32 font-primary font-normal">
      <div className="relative border border-gray rounded-lg py-5 px-32 flex items-center">
        <div className="absolute p-0.5 px-4 border border-gray -top-3 left-2 uppercase tracking-widest rounded bg-white text-xs ">
          Connect
        </div>
        <div className="flex items-center space-x-16 text-2xl">
          <FaGithub />
          <FiMail />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
