import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import About from './components/About';

const companies = [
  { name: 'Aditya Vision', logoUrl: '../assets/adityavision.png' },
  { name: 'Vijay Sales', logoUrl: '../assets/vijaysales.jpg' },
  { name: 'Reliance Digital', logoUrl: '../assets/reliancedigital.png' },
  { name: 'Poojara Telecom', logoUrl: '../assets/poojara.jpg' },
  { name: 'Bajaj Electricals', logoUrl: '../assets/bajajelectricals.jpg' }
];

const Home = ({ setSubmittedCompanies }) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState('');
  const navigate = useNavigate(); // For navigation

  // Handle checkbox change
  const handleCheckboxChange = (company) => {
    setSelectedCompanies((prevSelected) =>
      prevSelected.includes(company)
        ? prevSelected.filter((c) => c !== company) // Uncheck (remove from selection)
        : [...prevSelected, company] // Check (add to selection)
    );
  };

  // Handle adding a new company
  const handleAddCompany = () => {
    if (newCompany && !selectedCompanies.includes(newCompany)) {
      setSelectedCompanies((prevSelected) => [...prevSelected, newCompany]);
      setNewCompany(''); // Clear input after adding
    }
  };

  // Handle submit button click (navigate to the /selected-companies route)
  const handleSubmit = () => {
    setSubmittedCompanies(selectedCompanies);  // Set the companies to parent state
    navigate('/selected-companies');  // Navigate to the new URL
  };

  // Map over companies array to display existing company checkboxes
  const comp = companies.map((company, index) => (
    <div key={index} className="company-item flex flex-col items-center my-4">
      <img src={company.logoUrl} alt={`${company.name} logo`} className="company-logo mb-2 h-16 w-16 object-contain" />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedCompanies.includes(company.name)}
          onChange={() => handleCheckboxChange(company.name)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <label className="text-lg">{company.name}</label>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-12 py-10">
      <div className="w-full flex justify-center">
        <About />
      </div>

      <div className="company-list grid grid-cols-1 md:grid-cols-3 gap-6">
        {comp}
        <div className="company-item flex flex-col items-center my-4">
          <input
            type="text"
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
            placeholder="Add another company"
            className="border border-gray-300 px-4 py-2 rounded-md mb-2"
          />
          <button
            onClick={handleAddCompany}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Add Company
          </button>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
