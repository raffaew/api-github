import { useContext } from "react";
import { GithubContext } from "../Contexts/GithubContext";

export const useGithub = () => {
  const context = useContext(GithubContext);

  if (!context) {
    throw new Error("useGithub deve ser usado dentro de um GithubProvider");
  }

  return context;

}