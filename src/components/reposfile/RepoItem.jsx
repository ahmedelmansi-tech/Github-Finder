import PropTypes from "prop-types";
import { FaLink, FaInfo, FaEye, FaStar, FaUtensils } from "react-icons/fa";
const RepoItem = ({ repItem }) => {
  const {
    name,
    description,
    html_url,
    forks_count,
    watchers_count,
    stargazers_count,
    open_issues,
  } = repItem;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body text-amber-50">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-3" />
          </a>
          {name}
        </h3>
        <p className="mb-3">{description}</p>
        {/* Badges */}
        <div>
          <div className="mr-3 badge badge-info badge-md">
            <FaEye /> {watchers_count}
          </div>
          <div className="mr-3 badge badge-success badge-md">
            <FaStar /> {stargazers_count}
          </div>
          <div className="mr-3 badge badge-error badge-md">
            <FaInfo /> {open_issues}
          </div>
          <div className="mr-3 badge badge-warning badge-md">
            <FaUtensils /> {forks_count}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repItem: PropTypes.object.isRequired,
};
export default RepoItem;
