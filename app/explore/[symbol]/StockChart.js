"use client";

// import React, { useEffect, useState } from 'react';
// import Chart from 'react-google-charts'; // Import the chart component

// function StockChart({ Symbol, FilteredStockData, ChartType }) {
//   const chartOptions = {
//     title: `${Symbol} Stock Chart`,
//     curveType: 'function',
//     legend: { position: 'bottom' },
//   };

//   return (
//     <div>
//       <Chart
//         chartType={ChartType}
//         data={FilteredStockData} // Replace with the actual chart data format
//         options={chartOptions}
//         graph_id="StockChart"
//         width={'100%'}
//         height={'400px'}
//         legend_toggle
//       />
//     </div>
//   );
// }

// export default StockChart;





import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function StockChart({ Symbol, FilteredStockData, ChartType }) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // You can add other chart options here
  };

  // Example chart data for a line chart
  const chartData = {
    labels: Object.keys(FilteredStockData), // X-axis labels (e.g., dates)
    datasets: [
      {
        label: `Stock Data for ${Symbol}`,
        data: Object.values(FilteredStockData).map((data) => parseFloat(data['4. close'])), // Y-axis data
        borderColor: 'blue', // Line color
        borderWidth: 2, // Line width
        fill: true, // Fill under the line
      },
    ],
  };

  const ChartComponent =
    ChartType === 'LineChart' ? Line :
    Line; // Default to LineChart

  return (
    <div>
      <ChartComponent data={chartData} options={chartOptions} />
    </div>
  );
}

export default StockChart;

