"use client"


import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function ProductPage() {
  const router = useRouter();
  const { symbol } = router.query || {};

  const [stockData, setStockData] = useState({
    name: '',
    symbol: '',
    description: '',
    priceData: {
      labels: [], // This should be an array of time-based labels (e.g., timestamps)
      datasets: [
        {
          label: 'Stock Price',
          data: [], // This should be an array of data points corresponding to the labels
          borderColor: 'blue',
          fill: false,
        },
      ],
    },
  });

  const options = {
    scales: {
      x: {
        type: 'time', // Use 'time' scale for time-based x-axis
        time: {
          unit: 'minute', // Adjust the time unit as needed
          displayFormats: {
            minute: 'HH:mm', // Display format for minutes
          },
          tooltipFormat: 'll HH:mm A', // Tooltip format as needed
        },
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  useEffect(() => {
    // Fetch stock/ETF data based on the symbol from AlphaVantage.
    async function fetchStockData() {
      try {
        const apiKey = 'SH8PXH2XXLCUGMMM'; // Replace with your AlphaVantage API key
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          const timeSeriesData = data['Time Series (1min)'];

          const labels = Object.keys(timeSeriesData).reverse();
          const priceData = labels.map((label) => ({
            t: new Date(label), // Use 't' for time values
            y: parseFloat(timeSeriesData[label]['1. open']),
          }));

          const stockInfo = {
            name: data['Meta Data']['2. Symbol'],
            symbol: symbol,
            description: 'Sample description', // You can fetch this data from AlphaVantage as well
            priceData: {
              labels: labels,
              datasets: [
                {
                  label: 'Stock Price',
                  data: priceData,
                  borderColor: 'blue',
                  fill: false,
                },
              ],
            },
          };

          setStockData(stockInfo);
        } else {
          console.error('Error fetching stock data.');
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    }

    if (symbol) {
      fetchStockData();
    }
  }, [symbol]);

  return (
    <div>
      <h1>{stockData.name} ({stockData.symbol})</h1>
      <p>{stockData.description}</p>

      <div>
        <h2>Price History</h2>
        <Line data={stockData.priceData} options={options} />
      </div>
    </div>
  );
}

export default ProductPage;
