import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = ({ title = "Githup Finder" }) => {
  return (
    <nav className="navbar bg-neutral mb-12  text-neutral-content shadow-xl">
      <div className="container mx-auto flex align-middle">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline mr-2 text-3xl" />
          <Link to={"/"} className="align-middle text-xl font-bold">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to={"/"} className="btn btn-ghost btn-sm rounded-btn mr-2">
              Home
            </Link>
            <Link to={"/about"} className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
