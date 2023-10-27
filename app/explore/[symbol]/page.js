 "use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import CompanyInformation from './CompanyInformation';

function ProductPage() {
  const router = useRouter() || {};
  const { symbol } = router.query || {};

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (symbol) {
      // Fetch product data for the symbol here and set it in state.
      const apiKey = 'demo'; // Replace with your actual Alpha Vantage API key
      const endpoint = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

      axios
        .get(endpoint)
        .then((response) => {
          const data = response.data;
          setProductData(data);
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [symbol]);

  // if (!productData) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      {/* <h1>{productData.Name}</h1>
      <h2>{productData.Symbol}</h2>
      <p>Exchange: {productData.Exchange}</p>
      <p>Sector: {productData.Sector}</p>
      <p>Industry: {productData.Industry}</p> */}
      {/* Display other product information and line graph here */}
      <Chart />
      <CompanyInformation />
      {/* <CompanyChart Symbol={params.stockid} />
        <CompanyDetail TikerValue={params.stockid} /> */}
    </div>
  );
}

export default ProductPage;


// pages/product.js

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';

// function ProductPage() {
//   const [productData, setProductData] = useState(null);
//   const [priceData, setPriceData] = useState([]);

// // Inside your component
// <Line
//   data={{
//     labels: priceData.map((item) => item.date),
//     datasets: [
//       {
//         label: 'Price History',
//         data: priceData.map((item) => item.price),
//         fill: false,
//         borderColor: 'rgba(75, 192, 192, 1)',
//       },
//     ],
//   }}
//   options={{
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'day',
//         },
//         title: {
//           display: true,
//           text: 'Date',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Price',
//         },
//       },
//     },
//   }}
// />


//   // useEffect(() => {
//   //   // Replace 'IBM' with a dynamic symbol extracted from the URL
//   //   const symbol = 'IBM';

//   //   // Fetch product data for the symbol
//   //   fetchProductData(symbol);
//   // }, []);

//   // const fetchProductData = (symbol) => {
//   //   // Use your API endpoint to fetch data for the symbol
//   //   // Replace 'YOUR_API_KEY' with your real API key
//   //   const apiKey = 'YOUR_API_KEY';

//   //   // Construct the API URL
//   //   const apiUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`;

//   //   // Fetch the data
//   //   fetch(apiUrl)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       // Set the product data
//   //       setProductData(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error fetching product data:', error);
//   //     });
//   // };

//   useEffect(() => {

//     const symbol = 'IBM';
//     // Fetch product data for the symbol here and set it in state.
//     // Replace 'YOUR_API_KEY' and 'YOUR_SYMBOL' with the actual values
//     axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`)
//       .then((response) => {
//         setProductData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });

//     // Fetch price history data
//     axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`)
//       .then((response) => {
//         setPriceData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching price history data:', error);
//       });
//   }, []);

//   if (!productData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//     <h1>{productData.Name} ({productData.Symbol})</h1>
//     <p>{productData.Description}</p>

//     {/* Display other product information here using productData */}
    
//     <h2>Price History</h2>
//     <div>
//       {priceData.length > 0 ? (
//         // Render the line graph using the fetched priceData
//         <Line
//           data={{
//             labels: priceData.map((item) => item.date),
//             datasets: [
//               {
//                 label: 'Price History',
//                 data: priceData.map((item) => item.price),
//               },
//             ],
//           }}
//         />
//       ) : (
//         <p>No price data available.</p>
//       )}
//     </div>
//   </div>
//   );

// }

// export default ProductPage;

