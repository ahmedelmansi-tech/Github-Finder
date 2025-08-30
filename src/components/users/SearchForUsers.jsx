import { useState, useContext } from "react";

// CONTEXT S
import GithubContext from "../../context/githubContext/GithubContext";

import AlertContext from "../../context/alertContext/AlertContext";

const SearchForUsers = () => {
  const [search, setSearch] = useState("");
  const { users, searchUsers, clearSearch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  // Searching
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //   Submitting Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("You Should type Something", "error");
    } else {
      // @todo search
      searchUsers(search);
      setSearch("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      {/* First DIV */}
      <div>
        <form onSubmit={handleSearchSubmit}>
          <div className="from-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 text-black input input-lg"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-36 btn btn-lg rounded-none z-3"
              >
                inspect
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* SECOND DIV  (CONDITION IF USERS IS FOUND  ) */}

      {users.length > 0 && (
        <div>
          <button onClick={clearSearch} className="btn btn-ghost btn-lg">
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchForUsers;
