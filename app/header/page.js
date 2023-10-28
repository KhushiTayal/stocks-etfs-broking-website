"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';
import ThemeSwitcher from './ThemeSwitcher'; // Import the ThemeSwitcher component

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Add state for dark mode

  // Pass a function to handle theme toggling to the ThemeSwitcher
  const handleThemeToggle = (isDark) => {
    setIsDarkMode(isDark);
  };

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
    <header className={isDarkMode ? 'dark-theme' : ''}>
      <div className="logo">
        
        <Link href="/explore">  <h2>GrowwStonks</h2> </Link>
        {/* <img src="./logo" alt="Logo" /> */}
      </div>
      <div className={`search-bar ${suggestions.length > 0 ? 'has-suggestions' : ''}`}>
        <input
          type="text"
          placeholder="Search for stocks or ETFs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li key={suggestion['1. symbol']}>
              {suggestion['1. symbol'] && suggestion['2. name']
                ? `${suggestion['1. symbol']} - ${suggestion['2. name']}`
                : 'No data available'}
            </li>
          ))}
        </ul>
      </div>
      {/* <Link href="/explore">Explore</Link>
      <Link href="/product">Products</Link> */}
            <div className="theme-switcher-container">
        <ThemeSwitcher onThemeToggle={handleThemeToggle} />
      </div>
    </header>
  );
}

export default Header;
