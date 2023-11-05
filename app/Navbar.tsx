import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

export default function Navv() {
  return (
    <>
      <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-slate-900 text-white">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg text-2xl cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <AiOutlineInstagram />
        </div>
        <div className="h-10 w-10 text-2xl flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <AiFillGithub />
        </div>
      </aside>
    </>
  );
}
