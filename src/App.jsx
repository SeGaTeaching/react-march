import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import IntroPage from './components/intro/IntroPage';
import State from './components/state/State';

function Header() {
  return (
    <nav>
        <ul>
          <li><Link to="/">Einführung</Link></li>
          <li><Link to="/counter">Zähler (useState)</Link></li>
          <li><Link to="/products">API: Produkte</Link></li>
          <li><Link to="/search">Live-Suche</Link></li>
        </ul>
      </nav>
  )
}

function Footer() {
  return (
    <footer>
      © 2025 React - BBQ Further Education
    </footer>
  )
}

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/counter" element={<State />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
