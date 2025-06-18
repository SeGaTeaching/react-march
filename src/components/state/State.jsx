import Accordion from "./Accordion";
import Counter from "./Counter";
import SearchBar from "./SearchBar";

function State() {
  return (
    <>
      <Counter />
      <hr />
      <h2>Accordion Example</h2>

      <Accordion
        title="Was ist React?"
        children="React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen."
      />

      <Accordion
        title="Was macht useState?"
        children="useState ermöglicht es Komponenten, eigenen Zustand zu speichern und zu verändern."
      />

      <Accordion
        title="Wofür ist useEffect?"
        children="useEffect wird verwendet, um Nebenwirkungen wie API-Aufrufe nach dem Rendern auszuführen."
      />

      <hr />

      <h2>SearchBar Example</h2>
      <SearchBar />
    </>
  );
}

export default State;
