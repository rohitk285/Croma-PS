import React, { useState } from 'react';

const aspects = [
  'Supply Chain',
  'Marketing Strategy',
  'Media Presence',
  'Product Portfolio',
  'Geographical Presence',
  'Financials',
  'Customer Feedback',
  'After Sales Services',
  'Future Outlooks'
];

const SelectedCompanies = ({ companies }) => {
  const [selectedAspects, setSelectedAspects] = useState([]);

  // Handle card selection, with a limit of 4
  const handleAspectSelect = (aspect) => {
    if (selectedAspects.includes(aspect)) {
      // Deselect aspect if already selected
      setSelectedAspects(selectedAspects.filter((item) => item !== aspect));
    } else if (selectedAspects.length < 4) {
      // Add aspect if not already selected, and less than 4 selected
      setSelectedAspects([...selectedAspects, aspect]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 space-y-8 translate-y-20">
      
      {/* Selected Companies Display */}
      <div className="w-full flex flex-col items-center">
        {companies.length > 0 ? (
          <div className="text-lg font-bold mb-4">
            Selected Companies are: {companies.join(', ')}.
          </div>
        ) : (
          <div className="text-lg text-gray-500">No companies selected</div>
        )}
      </div>

      {/* Cards for different aspects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl p-6">
        {aspects.map((aspect, index) => (
          <div
            key={index}
            className={`aspect-card flex items-center justify-center p-6 text-center font-bold border-2 rounded-lg cursor-pointer transition-colors duration-300
              ${selectedAspects.includes(aspect) ? 'bg-blue-100 border-blue-500 text-gray-800' : 'bg-gray-100 border-gray-300 text-gray-700'}
              ${selectedAspects.length === 4 && !selectedAspects.includes(aspect) ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-50'}
            `}
            onClick={() => handleAspectSelect(aspect)}
          >
            {aspect}
          </div>
        ))}
      </div>

      {/* Selected Aspect Limit Warning */}
      {selectedAspects.length === 4 && (
        <div className="text-red-500 text-sm">
          You can only select up to 4 aspects.
        </div>
      )}

      <button type="submit" className='bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg font-bold'>Submit</button>
    </div>
  );
};

export default SelectedCompanies;
