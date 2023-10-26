"use client"


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./explore.css";

function Explore() {
  const [activeTab, setActiveTab] = useState('gainers');
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const apiKey = 'SH8PXH2XXLCUGMMM';

  const loadData = () => {
    setIsLoading(true);
    const endpoint = `https://www.alphavantage.co/query?function=${
      activeTab === 'gainers' ? 'TOP_GAINERS' : 'TOP_LOSERS'
    }&apikey=${apiKey}`;

    axios
      .get(endpoint)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Explore Page</h1>
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
      {isLoading && <p>Loading...</p>}
      {!isLoading && data.length > 0 && ( // Check if data is not empty before mapping
        <ul className="card-grid">
          {data.map((item) => (
            <li key={item.symbol}>
              <div className="card">
                <h3>{item.symbol}</h3>
                <p>{item.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Explore;


