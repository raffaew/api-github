import { GithubContext } from '../Contexts/GithubContext';
import { useState } from "react";
import type { ReactNode } from "react";
import type {
  //GithubUser,
  //GithubRepo,
  GithubContextType,
} from "../types/github";
import { getUser, getRepos } from "../services/githubService";
import axios from "axios";


type GithubProviderProps = {
  children: ReactNode;
};

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [user, setUser] = useState<GithubContextType["user"] | null>(null); // faça assim para os demais tipos
  const [repos, setRepos] = useState<GithubContextType["repos"]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchUser = async (username: string) => {
    try {
      setLoading(true);
      setError(null);

      const [userData, reposData] = await Promise.all([
        getUser(username),
        getRepos(username),
      ]);
      setUser(userData);
      setRepos(reposData);
    } catch (error) {
      setUser(null);
      setRepos([]);

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 404) {
          setError("Usuário não encontrado");
        } else if (status === 403) {
          setError("Limite de requisições excedido. Tente novamente mais tarde.");
        } else {
          setError("Erro ao buscar usuário");
        }
      }
    } finally {
        setLoading(false);
    }
  };

  const value: GithubContextType = {
    user,
    repos,
    loading,
    error,
    searchUser,
  };

  return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>;

  
};
