"use client";

import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function StockChart({ Symbol, FilteredStockData, ChartType }) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const chartData = {
    labels: Object.keys(FilteredStockData),
    datasets: [
      {
        label: `Stock Data for ${Symbol}`,
        data: Object.values(FilteredStockData).map((data) => parseFloat(data['4. close'])), // Y-axis data
        borderColor: 'blue',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const ChartComponent =
    ChartType === 'LineChart' ? Line :
    Line;

  return (
    <div>
      <ChartComponent data={chartData} options={chartOptions} />
    </div>
  );
}

export default StockChart;

