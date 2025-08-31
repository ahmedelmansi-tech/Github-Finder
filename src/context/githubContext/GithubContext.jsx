import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

export const GithubContext = createContext();

const endpointURL = import.meta.env.VITE_APP_URL_BASE_ENDPOINT;
const githubToken = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialStates = {
    users: [],
    profile: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialStates);

  // THAT WAS FOR TESTING
  // const getUsers = async function () {
  //   handleLoading();
  //   let data = await fetch(`${endpointURL}users`, {
  //     headers: {
  //       Authorization: `token ${githubToken}`,
  //       Accept: "application/vnd.github+json",
  //     },
  //   });
  //   let dataUsers = await data.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: dataUsers,
  //   });
  // };

  // SEARCHING FOR USERS
  const searchUsers = async (searchingParam) => {
    handleLoading();

    const params = new URLSearchParams({
      q: searchingParam,
    });
    let data = await fetch(`${endpointURL}search/users?${params}`, {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    });

    let { items } = await data.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Profile

  const getProfile = async (par) => {
    handleLoading();

    let data = await fetch(`${endpointURL}users/${par}`, {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (data.status === 404) {
      window.location = "/notfound";
    } else {
      let profileData = await data.json();

      // DATA PER PROFILE
      // console.log(profileData);

      dispatch({
        type: "GET_PROFILE",
        payload: profileData,
      });
    }
  };

  // REPOS

  const getProfileRepos = async (par) => {
    handleLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 5,
      // direction: "asc",
    });

    // asc & desc

    let data = await fetch(`${endpointURL}users/${par}/repos?${params}`, {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (data.status === 404) {
      window.location = "/notfound";
    } else {
      let profileRepoData = await data.json();
      dispatch({
        type: "GET_REPOS",
        payload: profileRepoData,
      });
    }
  };

  const handleLoading = () => dispatch({ type: "SET_LOADING" });

  // CLEAR SEARCH
  const clearSearch = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        profile: state.profile,
        repos: state.repos,
        getProfileRepos,
        getProfile,
        searchUsers,
        clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
