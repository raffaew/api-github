import "./HeaderSearch.scss"
import { useState } from "react";
import { CiSearch } from "react-icons/ci";


interface HeaderProps {
  onSearch: (username: string) => void
}

const HeaderSearch = ({ onSearch }: HeaderProps) => {
  const [user, setUser] = useState<string>("");
  const handleSearch = () => {
    onSearch(user);
  }

  return (
    <div className="headerSearch">
      <img src="header.jpg" alt="headerImg" />
      <div className="search">
       <input 
      type="text"
      onChange={(e) => setUser(e.target.value)}
      placeholder="Buscar Usuário"
      /> 
       <CiSearch className="iconSearch" onClick={handleSearch} />
      </div>
    </div>
  )
}

export default HeaderSearch