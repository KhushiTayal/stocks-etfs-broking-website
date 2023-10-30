import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import "./grid.css";

function TopLosers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const router = useRouter();

  useEffect(() => {
    loadData();
  }, []);

  const apiKey = 'OBWBAIJ1XXE7KWM6';

  const loadData = () => {
    setIsLoading(true);

    //const endpoint = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;
    const endpoint = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`;

    axios
      .get(endpoint)
      .then((response) => {
        console.log('Top Losers API Response:', response.data);

        const transformedData = response.data['top_losers'] || [];

        setData(transformedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Top Losers data:', error);
        setIsLoading (false);
      });
  };

  const handleCardClick = (symbol) => {
    router.push(`/explore/${symbol}`);
  };

  return (
    <div>
      {isLoading && <p>Loading Top Losers...</p>}
      {!isLoading && data && data.length > 0 && (
        <div className="card-grid">
          {data.slice(0, cardsPerPage).map((item, index) => (
            <div
            key={index}
            className="card"
            onClick={() => handleCardClick(item.ticker)}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px',
              margin: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
          >
            <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#333' }}>
              {item.ticker}
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '4px', color: '#555' }}>
              ${item.price}
            </p>
            <p style={{ fontSize: '16px', marginBottom: '4px', color: '#555' }}>
              Change Amount: {item.change_amount}
            </p>
            <p style={{ fontSize: '16px', marginBottom: '4px', color: '#555' }}>
              Change Percentage: {item.change_percentage}
            </p>
            <p style={{ fontSize: '16px', color: '#555' }}>Volume: {item.volume}</p>
          </div>
          
          
          ))}
        </div>
      )}
      {data.length > cardsPerPage && (
        <button onClick={() => setCardsPerPage(cardsPerPage + 20)}>Load More</button>
      )}
    </div>
  );
}

export default TopLosers;
