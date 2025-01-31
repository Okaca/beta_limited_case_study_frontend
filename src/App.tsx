import Header from './components/Header'
import CSVUpload from './components/CSVUpload'
import { FiDollarSign, FiCreditCard, FiBarChart} from "react-icons/fi";
import InfoBoxRow from './components/InfoBoxRow';
import { useState } from 'react';
import Listing from './components/Listing';

function App() {

  const [csvData, setCsvData] = useState<any | null>(null);
  const [apiResponse, setApiResponse] = useState(null);
  // Callback function to update the state with the data received from CSVUpload
  const handleCsvData = (data : any) => {
    setApiResponse(data);
    // data handling
    const totalSpend = data.detected_patterns.reduce((total : number, pattern : any) => {
      return total + parseFloat(pattern.amount);
    }, 0);

    const totalTransactions = data.detected_patterns.length;
    const totalMerchants = data.normalized_transactions.length;

    const avgTransaction = parseFloat((totalSpend / totalTransactions).toFixed(2));

    setCsvData({
      totalSpend,
      transactions : totalTransactions,
      avgTransaction,
      merchants: totalMerchants
    });
  };

  const infoBoxes = [
    {
      icon: <FiDollarSign />,
      title: 'Total Spend',
      value: ` $ ${csvData ? csvData.totalSpend : 0}`,
    },
    {
      icon: <FiCreditCard />,
      title: 'Transactions',
      value: csvData ? csvData.transactions : 'N/A',
    },
    {
      icon: <FiBarChart />,
      title: 'Avg. Transaction',
      value: ` $ ${csvData ? csvData.avgTransaction : 0}`,
    },
    {
      icon: <FiCreditCard />,
      title: 'Merchants',
      value: csvData ? csvData.merchants : 'N/A',
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <Header />
        <CSVUpload onDataUpload={handleCsvData}/>
      </div>
      <InfoBoxRow infoBoxes={infoBoxes} />
      <Listing inputCsvData={apiResponse}/>
    </>
  )
}

export default App
