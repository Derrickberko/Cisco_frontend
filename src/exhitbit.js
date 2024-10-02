import React from 'react';

const Exhibit = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '20px 0' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Exhibit;
