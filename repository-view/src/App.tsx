import "./App.scss"
import Home from "./pages/Home"
import { GithubProvider } from "./Contexts/GithubProvider";
export default function App() {

  return (
    <div className="app">
      <GithubProvider>
        <Home />
      </GithubProvider>

    </div>
  );
}