import React from 'react';
import About from './components/About';

const companies = [
  { name: 'Aditya Vision', logoUrl: '../assets/adityavision.png' },
  { name: 'Vijay Sales', logoUrl: '../assets/vijaysales.jpg' },
  { name: 'Reliance Digital', logoUrl: '../assets/reliancedigital.png' },
  { name: 'Poojara Telecom', logoUrl: '../assets/poojara.jpg' },
  { name: 'Bajaj Electricals', logoUrl: '../assets/bajajelectricals.jpg' }
];

const Home = () => {
  // Define x as the mapped company components with buttons
  const x = companies.map((company, index) => (
    <div key={index} className="company-item flex flex-col items-center my-4">
      <img src={company.logoUrl} alt={`${company.name} logo`} className="company-logo mb-2 h-16 w-16 object-contain" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
        {company.name}
      </button>
    </div>
  ));

  // Directly return the component {x}
  return (
    <div className="company-list grid grid-cols-1 md:grid-cols-3 gap-6">
      <About /> {/* About section comes before company buttons */}
    </div>
  );
};

export default Home;
