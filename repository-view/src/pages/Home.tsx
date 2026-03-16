import "./Home.scss"
import HeaderSearch from "../components/HeaderSearch/HeaderSearch"
import ProfileBanner from "../components/ProfileBanner/ProfileBanner";
import Repositories from "../components/Repositories/Repositories";
import { useGithub } from "../hooks/useGithub";


const Home = () => {
  const {searchUser, user} = useGithub();

  return (
    <div className="home">
     <HeaderSearch onSearch={searchUser}/>
     {!user ? (
      <h1>Procure um usuário do Github na barra de pesquisa</h1>
     ) : (
      <> 
      <ProfileBanner user={user}/>
       <Repositories />
      </>
    
     )}
    
    </div>
   
    
  )
}

export default Home