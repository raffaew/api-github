import "./Repositories.scss";
import { useGithub } from "../../hooks/useGithub";
import { PiGitForkBold, PiShieldBold, PiStarBold } from "react-icons/pi";
import { useState } from "react";

const Repositories = () => {
  const { repos, loading } = useGithub();

  function daysAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();

    const diff = now.getTime() - date.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return `Atualizado há ${days} dias atrás.`;
  }

  const [showAll, setShowAll] = useState(false);

  const reposToShow = showAll ? repos : repos.slice(0, 4);

  

  return (
  <>
  {loading ? (<> </>) : <div className="repositories">
      
      <ul>
        {reposToShow.map((item) => (
          <li className="cards" key={item.id}>
            <div className="nameDescription">
              <a href={item.html_url} target="blank">
                <h4 className="title">{item.name}</h4>
              </a>
            </div>

            <p className="description">{item.description}</p>

            <div className="infos">
              {item.license && (
                <p className="license">
                  <PiShieldBold className="iconLicense" />
                  {item.license.name}
                </p>
              )}
              <p className="forks">
                <PiGitForkBold className="iconFork" />
                {item.forks_count}
              </p>
              <p className="stars">
                <PiStarBold className="iconStar" />
                {item.stargazers_count}
              </p>
              <p className="lastUpdate">{daysAgo(item.updated_at)}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="allRepositories" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Mostrar menos" : "Mostrar todos repositórios"}
      </p>
    </div>}
  </>
    
  );
};

export default Repositories;
