import { meta } from "@eslint/js";
import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
// GITHUBPROVIDER

import GithubContext from "../../context/githubContext/GithubContext";
const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
};

export default UserResults;
