'use client';

import { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabStyles = 'underline font-bold underline-offset-8';

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex justify-center gap-10 my-10">
      <p
        className={`cursor-pointer ${activeTab === 0 && activeTabStyles}`}
        onClick={() => handleTabClick(0)}
      >
        All Products
      </p>
      <p
        className={`cursor-pointer ${activeTab === 1 && activeTabStyles}`}
        onClick={() => handleTabClick(1)}
      >
        Shirts
      </p>
      <p
        className={`cursor-pointer ${activeTab === 2 && activeTabStyles}`}
        onClick={() => handleTabClick(2)}
      >
        Hoodies
      </p>
    </div>
  );
};

export default Tab;
