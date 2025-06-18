import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import IntroPage from "./components/intro/IntroPage";
import { useState } from "react";
import SearchBar from "./components/state/SearchBar";
import Counter from "./components/state/Counter";
import Accordion from "./components/state/Accordion";
import Colors from "./components/state/Colors";

function Header() {
  const [showExamples, setShowExamples] = useState(false);

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

        <li>
          <Link to="/about">About</Link>
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
            <Route path="/counter" element={<Counter />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/searchbar" element={<SearchBar />} />
            <Route path="/colors" element={<Colors />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
