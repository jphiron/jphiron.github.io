import { useContext } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { TopBar } from "./components/TopBar";
import { Background, Main } from "./App.styles";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Background theme={theme}>
      <Main className="App" theme={theme}>
        <TopBar />
        <Dashboard />
      </Main>
    </Background>
  );
}

export default App;
