import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-100 text-green-400">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-20 h-20">
            <img src={avatar_url} alt="githubAgent" />
          </div>
        </div>
        <div>
          <h2 className="card-title ">{login}</h2>

          <div className="mt-1">
            {" "}
            <Link
              to={`/users/${login}`}
              className="text-base-content text-opacity-40"
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
