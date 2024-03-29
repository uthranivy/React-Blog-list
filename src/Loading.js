import React from 'react';
import "./index.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;