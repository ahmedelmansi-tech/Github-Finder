import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl mb-6">OPS...</h1>
      <p className="text-5xl font-bold mb-6">404 Page not found!</p>
      <Link to={"/"} className="btn btn-primary">
        <FaHome />
        back to home
      </Link>
    </div>
  );
};

export default Notfound;
