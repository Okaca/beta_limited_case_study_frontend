import React from 'react';

interface InfoBoxProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-center p-4 bg-[#f5f5f5] shadow-lg rounded-xl">
      <div className="mr-4 text-2xl">
        {icon}
      </div>
      <div>
        <div className="text-gray-500 text-sm">{title}</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
    </div>
  );
};

export default InfoBox;
