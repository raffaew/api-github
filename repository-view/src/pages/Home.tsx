import HeaderSearch from "../components/HeaderSearch/HeaderSearch"
import ProfileBanner from "../components/ProfileBanner/ProfileBanner";
import Repositories from "../components/Repositories/Repositories";
import { useGithub } from "../hooks/useGithub";


const Home = () => {
  const {searchUser, user} = useGithub();

  return (
    <>
     <HeaderSearch onSearch={searchUser}/>
     {!user ? (
      <p>Tente procurar um usuário válido na barra de pesquisa</p>
     ) : (
      <> 
      <ProfileBanner user={user}/>
       <Repositories />
      </>
    
     )}
    
    </>
   
    
  )
}

export default Home