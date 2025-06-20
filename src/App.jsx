import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import IntroPage from "./components/intro/IntroPage";
import { useState } from "react";
import SearchBar from "./components/state/SearchBar";
import Counter from "./components/state/Counter";
import Accordion from "./components/state/Accordion";
import Colors from "./components/state/Colors";
import ColorChoice from "./components/effect/ColorChoice";
import AutoCounter from "./components/effect/AutoCounter";
import ResizeWindow from "./components/effect/ResizeWindow";
import CrudRead from "./components/crud/CrudRead";
import Crud from "./components/crud/Crud";

function Header() {
  const [showExamples, setShowExamples] = useState(false);
  const [effectExamples, setEffectExamples] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">
          <a
            className={`submenu-toggle ${showExamples ? "open" : ""}`}
            onClick={() => setShowExamples((prev) => !prev)}
          >
            'useState' Beispiele ▾
          </a>

          {showExamples && (
            <ul
              className={`submenu ${showExamples ? "open" : ""}`}
              onMouseLeave={() => setShowExamples(false)}
            >
              <li>
                <Link to="/counter" onClick={() => setShowExamples(false)}>
                  Counter
                </Link>
              </li>
              <li>
                <Link to="/accordion" onClick={() => setShowExamples(false)}>
                  Accordion
                </Link>
              </li>
              <li>
                <Link to="/searchbar" onClick={() => setShowExamples(false)}>
                  SearchBar
                </Link>
              </li>
              <li>
                <Link to="/colors" onClick={() => setShowExamples(false)}>
                  Colors
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <a
            className={`submenu-toggle ${effectExamples ? "open" : ""}`}
            onClick={() => setEffectExamples((prev) => !prev)}
          >
            'useEffect' Beispiele ▾
          </a>

          {effectExamples && (
            <ul
              className={`submenu ${effectExamples ? "open" : ""}`}
              onMouseLeave={() => setEffectExamples(false)}
            >
              <li>
                <Link to="/color-choice" onClick={() => setEffectExamples(false)}>
                  Farbauswahl
                </Link>
              </li>
              <li>
                <Link to="/auto-counter" onClick={() => setEffectExamples(false)}>
                  Auto Counter
                </Link>
              </li>
              <li>
                <Link to="/resize-window" onClick={() => setEffectExamples(false)}>
                  Fenstergröße
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/i-am-crud">CRUD - R</Link>
        </li>
        <li>
          <Link to="/i-am-crud-advanced">CRUD - CUD</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return <footer>© 2025 React - BBQ Further Education</footer>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<IntroPage />} />

            {/* useState Examples Components */}
            <Route path="/counter" element={<Counter />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/searchbar" element={<SearchBar />} />
            <Route path="/colors" element={<Colors />} />

            {/* useEffect Examples Components */}
            <Route path="/color-choice" element={<ColorChoice />} />
            <Route path="/auto-counter" element={<AutoCounter />} />
            <Route path="/resize-window" element={<ResizeWindow />} />

            {/* CRUD Examples Components */}
            <Route path="/i-am-crud" element={<CrudRead />} />
            <Route path="/i-am-crud-advanced" element={<Crud />} />

          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
