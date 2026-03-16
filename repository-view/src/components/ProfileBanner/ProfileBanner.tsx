import "./ProfileBanner.scss";
import type { GithubUser } from "../../types/github";
import { useGithub } from "../../hooks/useGithub";
import Loading from "../Loading/Loading";

interface Props {
  user: GithubUser | null;
}

const ProfileBanner = ({ user }: Props) => {
  const { loading } = useGithub();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="ProfileBanner">
          <div className="infos">
            <div className="avatar">
              <img src={user?.avatar_url} alt="" />
            </div>
            <div className="informations">
              <p>Followers</p>
              <div className="separator"></div>
              <p className="countFallowers">{user?.followers}</p>
            </div>

            <div className="informations">
              <p>Fallowings</p>
              <div className="separator"></div>

              <p className="countFallowings">{user?.following}</p>
            </div>

            <div className="informations">
              <p>Location</p>
              <div className="separator"></div>
              <p className="city">{user?.location}</p>
            </div>
          </div>

          <div className="description">
            {user?.html_url && (
              <a href={user?.html_url} target="blank">
                <h1 className="user">{user?.login}</h1>
              </a>
            )}

            <p className="bio">{user?.bio}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileBanner;
