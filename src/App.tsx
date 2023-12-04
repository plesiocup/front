import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<SearchResult />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
