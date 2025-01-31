import React from 'react';

interface PatternListingsProps {
  data: any[];
}

const PatternListings: React.FC<PatternListingsProps> = ({ data }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Pattern Listings</h3>
      <div className="space-y-4">
        {data.map((pattern, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold">{pattern.type}</h4>
            <p>Merchant: {pattern.merchant}</p>
            <p>Amount: {pattern.amount}</p>
            <p>Frequency: {pattern.frequency}</p>
            <p>Confidence: {pattern.confidence}</p>
            <p>Next Expected: {pattern.next_expected}</p>
            {pattern.notes && <p>Notes: {pattern.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternListings;
