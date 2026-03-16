export interface GithubUser {
  login: string;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  location: string | null;
  html_url: string | null
}

export interface licenseType {
  name: string
}

export interface GithubRepo {
  id: number;
  name: string;
  forks_count: number;
  description: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  license: licenseType | null;
}

export interface GithubContextType {
  user: GithubUser | null;
  repos: GithubRepo[];
  error: string | null;
  loading: boolean;
  searchUser: (username: string) => Promise<void>;
}
