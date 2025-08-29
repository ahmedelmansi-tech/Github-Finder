import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
export const GithubContext = createContext();

const endpointURL = import.meta.env.VITE_APP_URL_BASE_ENDPOINT;
const githubToken = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialStates = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialStates);

  const getUsers = async function () {
    let data = await fetch(`${endpointURL}users`, {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    });
    let dataUsers = await data.json();

    dispatch({
      type: "GET_USERS",
      payload: dataUsers,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        getUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
