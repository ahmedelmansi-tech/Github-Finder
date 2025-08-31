import { useParams } from "react-router-dom";
import GithubContext from "../context/githubContext/GithubContext";
import { useContext, useEffect } from "react";
import Spinner from "../components/layout/Spinner";
import { Link } from "react-router-dom";
import { FaCodepen, FaUserFriends, FaUsers, FaStore } from "react-icons/fa";
import Repo from "../components/reposfile/Repo";
const Profile = () => {
  const { person } = useParams();
  const { profile, getProfile, loading, type, getProfileRepos, repos } =
    useContext(GithubContext);

  useEffect(() => {
    getProfile(person);
    getProfileRepos(person);
  }, []);

  console.log(profile);
  if (loading) {
    return <Spinner />;
  }

  const {
    avatar_url,
    name,
    login,
    hireable,
    bio,
    html_url,
    location,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
  } = profile;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link className="btn btn-ghost" to={"/"}>
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="PIC" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-2xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && (
                <div className="mx-1 badge badge-success">hireable</div>
              )}
            </h1>
            <p>{bio}</p>

            <div className="mt-4 card-actions">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Go to Profile
              </a>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-1.5 rounded-lg shadow-md stat bg-base-200 mb-4">
            {location && (
              <div className="stat text-zinc-600">
                <div className="stat-title text-md">Location</div>
                <div className="text-lg stat-value">{location}</div>
              </div>
            )}

            {blog && (
              <div className="stat text-zinc-600">
                <div className="stat-title text-md">Website </div>
                <div className="text-lg stat-value">
                  <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </div>
              </div>
            )}

            {twitter_username && (
              <div className="stat text-zinc-600">
                <div className="stat-title text-md">Twitter </div>
                <div className="text-lg stat-value">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat shadow-2xl">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value text-zinc-600 pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat shadow-2xl">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followings</div>
            <div className="stat-value text-zinc-600 pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat shadow-2xl">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value text-zinc-600 pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          <div className="stat shadow-2xl">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value text-zinc-600 pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>

        <Repo repoList={repos} />
      </div>
    </>
  );
};

export default Profile;
