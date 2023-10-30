 "use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import CompanyInformation from './CompanyInformation';

function ProductPage() {
  const router = useRouter() || {};
  const { symbol } = router.query || {};
  console.log("symbol", symbol);
  const [productData, setProductData] = useState(null);

  return (
    <div>
      
      <Chart />
      <CompanyInformation TickerValue={symbol} />
      
    </div>
  );
}

export default ProductPage;




