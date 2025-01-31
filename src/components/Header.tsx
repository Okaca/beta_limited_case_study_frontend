import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">Transaction Analyzer</h1>
      </div>
    </header>
  );
};

export default Header;
