import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App font-sans min-h-screen flex flex-col">
        {/* Navigation Menu */}
        <Navbar />

        {/* Main Content Body */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future routes like inventory, about etc can be added here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
