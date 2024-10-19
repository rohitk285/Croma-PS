import React, { useState } from 'react';
import About from './components/About';

const companies = [
  { name: 'Aditya Vision', logoUrl: '../assets/adityavision.png' },
  { name: 'Vijay Sales', logoUrl: '../assets/vijaysales.jpg' },
  { name: 'Reliance Digital', logoUrl: '../assets/reliancedigital.png' },
  { name: 'Poojara Telecom', logoUrl: '../assets/poojara.jpg' },
  { name: 'Bajaj Electricals', logoUrl: '../assets/bajajelectricals.jpg' }
];

const Home = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (company) => {
    setSelectedCompanies((prevSelected) =>
      prevSelected.includes(company)
        ? prevSelected.filter((c) => c !== company) // Uncheck (remove from selection)
        : [...prevSelected, company] // Check (add to selection)
    );
  };

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
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Selected Companies:</h2>
        <ul>
          {selectedCompanies.map((company, index) => (
            <li key={index} className="text-lg">{company}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
