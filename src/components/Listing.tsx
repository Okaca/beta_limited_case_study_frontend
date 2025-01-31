import { useState } from "react";
import MerchantListings from "./MerchantListing";
import PatternListings from "./PatternListing";

const Listing: React.FC<any> = ({ inputCsvData }) => {
  const [activeTab, setActiveTab] = useState<"merchant" | "pattern">(
    "merchant"
  );



  return (
    <>
      <div className="flex space-x-4 p-4">
        {/* Merchant Analysis Tab */}
        <button
          className={`flex-1 text-lg font-bold py-2 px-4 rounded-md shadow-md transition-all ${
            activeTab === "merchant"
              ? "bg-white text-black shadow-lg"
              : "bg-gray-200 text-gray-500 shadow-sm"
          }`}
          onClick={() => setActiveTab("merchant")}
        >
          Merchant Analysis
        </button>

        {/* Pattern Detection Tab */}
        <button
          className={`flex-1 text-lg font-bold py-2 px-4 rounded-md shadow-md transition-all ${
            activeTab === "pattern"
              ? "bg-white text-black shadow-lg"
              : "bg-gray-200 text-gray-500 shadow-sm"
          }`}
          onClick={() => setActiveTab("pattern")}
        >
          Pattern Detection
        </button>
      </div>

      {/* Display the content of the active tab */}
      <div className="p-4">
        {activeTab === "merchant" && (
          <div>
            <h3 className="text-xl font-bold">Normalized Merchants</h3>
            <p className="text-gray-500">AI-powered merchant name normalization and categorization</p>
            {inputCsvData && (
                <MerchantListings data={inputCsvData.normalized_transactions} />
            )}
          </div>
        )}
        {activeTab === "pattern" && (
          <div>
            <h3 className="text-xl font-bold">Detected Patterns</h3>
            <p className="text-gray-500">Subscription and recurring payment detection</p>
            {activeTab === "pattern" && inputCsvData && (
                <PatternListings data={inputCsvData.detected_patterns} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Listing;
