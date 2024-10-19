import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import SelectedCompanies from './SelectedCompanies';  // Import child component

const App = () => {
  const [submittedCompanies, setSubmittedCompanies] = useState([]); // Store submitted companies

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setSubmittedCompanies={setSubmittedCompanies} />} />       
        <Route path="/selected-companies" element={<SelectedCompanies companies={submittedCompanies} />} />
      </Routes>
    </Router>
  );
};

export default App;
