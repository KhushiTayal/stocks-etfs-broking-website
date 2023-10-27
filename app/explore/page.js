"use client"
//OBWBAIJ1XXE7KWM6

import React, { useState } from 'react';
import TopGainers from './TopGainers';
import TopLosers from './TopLosers';
import "./explore.css";

function Explore() {
  const [activeTab, setActiveTab] = useState('gainers');

  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab('gainers')}
          className={activeTab === 'gainers' ? 'active' : ''}
        >
          Top Gainers
        </button>
        <button
          onClick={() => setActiveTab('losers')}
          className={activeTab === 'losers' ? 'active' : ''}
        >
          Top Losers
        </button>
      </div>

      {activeTab === 'gainers' && <TopGainers />}
      {activeTab === 'losers' && <TopLosers />}
      
      {/* Rest of your code */}
    </div>
  );
}

export default Explore;


