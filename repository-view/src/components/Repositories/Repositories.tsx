import "./Repositories.scss";
import { useGithub } from "../../hooks/useGithub";


const Repositories = () => {
  const { repos } = useGithub();


  return (
    <div className="repositories">
      <ul>
        {repos.map((item => (
            <li className="cards" key={item.id}>
                <div className="nameDescription">
                 <h4 className="title">{item.name}</h4>
                <p className="description">{item.description}</p>   
                </div>
                
                <div className="infos">
                  <p className="forks">{item.forks_count}</p>
                <p className="stars">{item.stargazers_count}</p>
                <p className="lastUpdate">{item.updated_at}</p>   
                </div>
               
            </li>
        )))}
      </ul>
    </div>
  );
};

export default Repositories;
