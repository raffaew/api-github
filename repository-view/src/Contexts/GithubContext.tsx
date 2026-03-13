import { createContext } from "react";
import type {GithubContextType} from "../types/github";

export const GithubContext = createContext<GithubContextType | undefined>(undefined);

