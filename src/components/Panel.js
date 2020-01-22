import React from 'react';

const Panel = ({ title, index }) => {
  return (
    <div key={index}>
      <p>{title}</p>
    </div>
  );
};

export default Panel;
