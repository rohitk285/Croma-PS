import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';

function App() {

  return (
    <Router>
      <div className="App flex flex-col min-h-screen"> {/* Main container with Flexbox */}
        <Navbar />
        <div className="flex-grow"> {/* This section will expand to fill available space */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer /> {/* Footer will always stick to the bottom */}
      </div>
    </Router>
  )
}

export default App
