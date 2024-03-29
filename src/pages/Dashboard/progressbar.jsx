import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dateStarted = new Date('2023-03-23'); // replace with actual start date
    const today = new Date();
    const daysElapsed = Math.floor((today - dateStarted) / (1000 * 60 * 60 * 24));
    const daysCompleted = daysElapsed > 30 ? 30 : daysElapsed;
    const fastProgress = (daysCompleted / 30) * 100

    if (daysCompleted > 0) {
      setProgress(fastProgress);
    }else{
      setProgress(0);
    }
  }, []);

  return (
    <div className="progress-bar" style={{ border: '2px solid #1976d2', borderRadius: '12px', height: '24px' }}>
      <div className="progress" style={{ width: `${progress}%`, height: '20px', backgroundColor: "#1976d2", borderRadius: '10px' }}></div>
    </div>
  );
};

export default ProgressBar;