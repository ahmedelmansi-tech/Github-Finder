import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
const Repo = ({ repoList }) => {
  const length = repoList.length;
  return (
    <div className="rounded-lg shadow-lg card bg-base-100 mb-3 text-zinc-800">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Top ({length}) Repos
        </h2>

        {length > 0 &&
          repoList.map((repItem) => {
            return <RepoItem key={repItem.id} repItem={repItem} />;
          })}
      </div>
    </div>
  );
};

Repo.PropTypes = {
  repoList: PropTypes.array.isRequired,
};

export default Repo;
