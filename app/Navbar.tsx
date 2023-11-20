import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Navv() {
  return (
    <>
      <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-slate-900 text-white">
        <a
          href="https://www.linkedin.com/in/k-vivek-kumar-1a4486272"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 flex items-center justify-center rounded-lg text-2xl cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear"
        >
          <BiLogoLinkedin />
        </a>
        <a
          href="https://github.com/v-house/learn-linux.git"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 text-2xl flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear"
        >
          <AiFillGithub />
        </a>
      </aside>
    </>
  );
}
