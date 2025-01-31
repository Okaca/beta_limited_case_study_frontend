import React from 'react';

interface MerchantListingsProps {
  data: any[];
}

const MerchantListings: React.FC<MerchantListingsProps> = ({ data }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Merchant Listings</h3>
      <div className="space-y-4">
        {data.map((transaction, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-gray-500 font-semibold">Original</h3>
            <h4 className="text-lg font-semibold">{transaction.original}</h4>
            <div className="flex space-x-4 mt-4">
                {/* Category */}
                <div className="flex-1 bg-gray-200 text-black font-semibold text-sm py-2 px-4 rounded-lg">
                    {transaction.normalized.category}
                </div>

                {/* Subcategory */}
                <div className="flex-1 bg-gray-200 text-black font-semibold text-sm py-2 px-4 rounded-lg">
                    {transaction.normalized.sub_category}
                </div>

                {/* Flags */}
                <div className="flex-1 bg-lightblue-200 text-gray-500 font-semibold text-sm py-2 px-4 rounded-lg">
                    {transaction.normalized.flags.map((flag :any , index : number) => (
                    <div key={index} className="mb-2">
                        {flag}
                    </div>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchantListings;
