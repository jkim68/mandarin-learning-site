import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BopomofoCharacters from './BopomofoCharacters';

function App() {
  return (
    <Router>
      <div className = "App-background">
        <div className="App">
          {/* Navigation */}
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | 
            <Link to="/BopomofoCharacters">BopomofoCharacters</Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/BopomofoCharacters" element={<BopomofoCharacters />} />
          </Routes>
        </div>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>This is the About Page</h2>;
}

export default App;
