import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateToken from './pages/CreateToken';
import ReviewToken from './pages/ReviewToken';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateToken />} />
          <Route path="/review" element={<ReviewToken />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;