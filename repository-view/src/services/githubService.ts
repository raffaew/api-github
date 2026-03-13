import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const getUser = async (username: string) => {
  try {
    const { data } = await githubApi.get(`/users/${username}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error("Unexpected error");
  }
};

export const getRepos = async (username: string) => {
  try {
    const { data } = await githubApi.get(`/users/${username}/repos`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error("Unexpected error");
  }
};