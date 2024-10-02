import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IPFetcher = ({ version }) => {
  const [ip, setIP] = useState('Fetching IP...');

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get(
          version === 'v6'
            ? 'https://api64.ipify.org?format=json'  // For IPv6
            : 'https://api.ipify.org?format=json'    // For IPv4
        );
        setIP(response.data.ip);
      } catch (error) {
        setIP('Failed to fetch IP');
      }
    };

    fetchIP();
  }, [version]);

  return (
    <div>
      <p>Your {version === 'v6' ? 'IPv6' : 'IPv4'} address is: {ip}</p>
    </div>
  );
};

export default IPFetcher;
