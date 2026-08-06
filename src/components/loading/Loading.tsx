import React from 'react';
import './Loading.css';

export const Loading: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-box dashed-box">
        <span className="loading-dots"></span>
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
