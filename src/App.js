import { Container } from "@material-ui/core";
import CharactersPanel from "./components/charactersPanel";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Container>
        <Header></Header>
        <CharactersPanel></CharactersPanel>
      </Container>
    </div>
  );
}

export default App;
