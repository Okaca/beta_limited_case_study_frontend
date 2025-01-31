import React from 'react';
import InfoBox from './InfoBox';  // Import the InfoBox component

interface InfoBoxRowProps {
  infoBoxes: { icon: React.ReactNode, title: string, value: string | number }[];
}

const InfoBoxRow: React.FC<InfoBoxRowProps> = ({ infoBoxes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {infoBoxes.map((box, index) => (
        <InfoBox key={index} icon={box.icon} title={box.title} value={box.value} />
      ))}
    </div>
  );
};

export default InfoBoxRow;
