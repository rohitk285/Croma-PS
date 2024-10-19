import React from 'react';

const SelectedCompanies = ({ companies }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-12 py-10">
      <h2 className="text-xl font-bold">Selected Companies:</h2>
      <ul>
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <li key={index} className="text-lg">{company}</li>
          ))
        ) : (
          <li className="text-lg text-gray-500">No companies selected</li>
        )}
      </ul>
    </div>
  );
};

export default SelectedCompanies;
