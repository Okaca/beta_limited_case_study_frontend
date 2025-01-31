import Header from './components/Header'
import CSVUpload from './components/CSVUpload'
import { FiDollarSign, FiCreditCard, FiBarChart} from "react-icons/fi";
import InfoBoxRow from './components/InfoBoxRow';
import { useState } from 'react';
import Listing from './components/Listing';

function App() {

  const [csvData, setCsvData] = useState<any | null>(null);
  // Callback function to update the state with the data received from CSVUpload
  const handleCsvData = (data : any) => {
    // data handling
    setCsvData(data);
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
      value: csvData ? csvData.avgTransaction : 'N/A',
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
      <Listing inputCsvData={csvData}/>
    </>
  )
}

export default App
