import React, { useEffect, useMemo, useState } from 'react';
import StockChart from './StockChart';
import { ChartData } from '../../mockData/ChartInfo';
import './Chart.css';

function Select({ value, options, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function Chart({ Symbol }) {
  const [isMounted, setIsMounted] = useState(false);
  const [day, setDay] = useState('1year');
  const [chartType, setChartType] = useState('LineChart');

  const seriesData = ChartData['Weekly Adjusted Time Series'];

  const FilteredStockData = useMemo(() => {
    const currentDate = new Date();
    const selectedData = {};

    for (const date in seriesData) {
      const dateObj = new Date(date);
      const timeDiff = currentDate - dateObj;

      if (
        (day === '7days' && timeDiff <= 7 * 24 * 60 * 60 * 1000) ||
        (day === '1month' && timeDiff <= 30 * 24 * 60 * 60 * 1000) ||
        (day === '1year' && timeDiff <= 365 * 24 * 60 * 60 * 1000) ||
        (day === '10years' && timeDiff <= 10 * 365 * 24 * 60 * 60 * 1000) ||
        (day === '20years' && timeDiff <= 20 * 365 * 24 * 60 * 60 * 1000)
      ) {
        selectedData[date] = seriesData[date];
      }
    }

    return selectedData;
  }, [day, seriesData]);

  console.log(FilteredStockData);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="chart-container">
        <div className="chart-header">
          <div className="accent-background"></div>
          <h1 className="chart-title">{Symbol} Chart</h1>
          <h1 className="chart-title">{chartType} (Past {day})</h1>
        </div>
        <StockChart Symbol={Symbol} FilteredStockData={FilteredStockData} ChartType={chartType} />
        <div className="chart-controls">
          <div className="chart-buttons">
            <button
              className={`chart-button ${
                day === '1month' ? 'active-button' : 'inactive-button'
              }`}
              onClick={() => setDay('1month')}
            >
              1m
            </button>
            <button
              className={`chart-button ${
                day === '1year' ? 'active-button' : 'inactive-button'
              }`}
              onClick={() => setDay('1year')}
            >
              1y
            </button>
            <button
              className={`chart-button ${
                day === '10years' ? 'active-button' : 'inactive-button'
              }`}
              onClick={() => setDay('10years')}
            >
              10y
            </button>
            <button
              className={`chart-button rounded-right-button ${
                day === '20years' ? 'active-button' : 'inactive-button'
              }`}
              onClick={() => setDay('20years')}
            >
              20y
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
