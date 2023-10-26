"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import './header.css';


function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch stock suggestions from AlphaVantage when the searchTerm changes
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === '') {
        setSuggestions([]);
        return;
      }

      const apiKey = 'SH8PXH2XXLCUGMMM'; // Replace with your AlphaVantage API key
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data);
          if (data['bestMatches']) {
            setSuggestions(data['bestMatches']);
            console.log(data['bestMatches']);
          }
        }
      } catch (error) {
        console.error('Error fetching stock suggestions:', error);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  return (
    <header>
      <h1>Stock Broker</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for stocks or ETFs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li key={suggestion['1. symbol']}>
              {suggestion['1. symbol']} - {suggestion['2. name']}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/explore">Explore</Link>
      <Link href="/product">Products</Link>
    </header>
  );
}

export default Header;
