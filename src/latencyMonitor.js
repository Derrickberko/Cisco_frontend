import React, { useState, useEffect } from 'react';

const LatencyMonitor = () => {
  const [latency, setLatency] = useState('Waiting for packets...');

  useEffect(() => {
    // Open the WebSocket connection
    const ws = new WebSocket('ws://localhost:55455');

    // When a message is received, calculate latency
    ws.onmessage = (event) => {
      const packetTimestamp = Number(event.data); // Packet's sent timestamp in milliseconds
      const currentTime = Date.now(); // Current time in milliseconds
      const packetLatency = currentTime - packetTimestamp; // Calculate latency
      setLatency(`${packetLatency} ms`); // Set the latency in state
    };

    // Handle WebSocket errors
    ws.onerror = (error) => {
      setLatency('Error in WebSocket connection');
      console.error('WebSocket Error:', error);
    };

    // Cleanup function to close WebSocket connection
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array to ensure this runs once on mount

  return (
    <div>
      <p>Current Packet Latency: {latency}</p>
    </div>
  );
};

export default LatencyMonitor;
