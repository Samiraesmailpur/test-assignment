import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsFileEarmarkPostFill } from "react-icons/bs";

const SideBar = () => {
  return(
  <nav className="bg-white shadow-lg top-0 left-0 min-w-[240px] py-6 px-4 overflow-auto sm:fixed sm:h-screen">
    <ul className="flex sm:flex-col">
      <li>
        <Link to='/'
          className="text-black hover:text-blue-600 text-xl flex items-center gap-2.5 hover:bg-blue-50 rounded px-4 py-2.5 transition-all ">
          <CgProfile /> Profile
        </Link>
      </li>
      <li>
        <Link to='/posts'
          className="text-black hover:text-blue-600 text-xl flex items-center gap-2.5 hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
          <BsFileEarmarkPostFill /> Posts
        </Link>
      </li>
    </ul>
  </nav>
  )
};

export default SideBar;