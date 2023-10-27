import React, { useState } from 'react';
import './CompanyInformation.css'; // Import the CSS

const CompanyInformation = ({ TikerValue }) => {
  const [error, setError] = useState(false);

  const CompanyInfo = {
    Name: 'Company Name',
    Symbol: 'COMP',
    Exchange: 'NYSE',
    Currency: 'USD',
    Sector: 'Technology',
    Industry: 'Software',
    Description: 'Company description goes here...',
    '50DayMovingAverage': 100,
    '200DayMovingAverage': 90,
    MarketCapitalization: 1000000000,
    EBITDA: 500000000,
    PERatio: 15,
    Beta: 1.2,
    ProfitMargin: 10.5,
    DividendYield: 2.5,
    AnalystTargetPrice: 110,
    '52WeekHigh': 120,
    '52WeekLow': 80,
  };

  const tickerPrice = 105.5;
  const tickerChangePercentage = '+5.5%';
  const growthValue = 'gainer';

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="company-information-container">
      <div className="company-information-content">
        <div className="company-information-header">
          <span className="company-name">{CompanyInfo?.Name}</span>
          <span className="ticker-price">${tickerPrice}</span>
        </div>
        <div className="company-information-row">
          <span className="ticker-symbol">{CompanyInfo?.Symbol}</span>
          <div
            className={`growth-indicator ${
              growthValue === 'gainer' ? 'positive' : 'negative'
            }`}
          >
            <span className="percentage">{tickerChangePercentage}</span>
            {growthValue === 'gainer' ? (
              <span>&uarr;</span>
            ) : (
              <span>&darr;</span>
            )}
          </div>
        </div>
        <div className="company-information-row">
          <span className="exchange">{CompanyInfo?.Exchange}</span>
          <span className="currency">{CompanyInfo?.Currency}</span>
        </div>
        <div className="company-description">
          <div className="company-details">
            <div className="sector-industry">
              <span className="sector">SECTOR: {CompanyInfo?.Sector}</span>
              <span className="industry">INDUSTRY: {CompanyInfo?.Industry}</span>
            </div>
            <span className="about-company">
              About {CompanyInfo?.Name}
            </span>
            <p className="description-text">{CompanyInfo?.Description}</p>
            <div className="moving-averages">
              <div className="moving-average">
                <div className="title">50 Day Moving Average</div>
                <div className="value">${CompanyInfo?.['50DayMovingAverage']}</div>
              </div>
              <div className="moving-average">
                <div className="title">200 Day Moving Average</div>
                <div className="value">${CompanyInfo?.['200DayMovingAverage']}</div>
              </div>
              {/* Add more fields here */}
            </div>
          </div>
          <div className="hidden-lg">
            <div className="company-details">
              <div className="metric">
                <div className="title">Market Cap</div>
                <div className="value">
                  {Number(CompanyInfo?.MarketCapitalization)}
                </div>
              </div>
              <div className="metric">
                <div className="title">EBITDA</div>
                <div className="value">{Number(CompanyInfo?.EBITDA)}</div>
              </div>
              <div className="metric">
                <div className="title">P/E Ratio</div>
                <div className="value">{CompanyInfo?.PERatio}</div>
              </div>
              <div className="metric">
                <div className="title">Beta</div>
                <div className="value">{CompanyInfo?.Beta}</div>
              </div>
              <div className="metric">
                <div className="title">Profit Margin</div>
                <div className="value">{CompanyInfo?.ProfitMargin}</div>
              </div>
              <div className="metric">
                <div className="title">Dividend Yield</div>
                <div className="value">{CompanyInfo?.DividendYield}%</div>
              </div>
              <div className="metric">
                <div className="title">52 Week High</div>
                <div className="value">${CompanyInfo?.['52WeekHigh']}</div>
              </div>
              <div className="metric">
                <div className="title">52 Week Low</div>
                <div className="value">${CompanyInfo?.['52WeekLow']}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
