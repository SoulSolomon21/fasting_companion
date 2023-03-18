import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dateStarted = new Date('2023-03-01'); // replace with actual start date
    const today = new Date();
    const daysElapsed = Math.floor((today - dateStarted) / (1000 * 60 * 60 * 24));
    const daysCompleted = daysElapsed > 30 ? 30 : daysElapsed;
    const fastProgress = (daysCompleted/30)*100
    setProgress(fastProgress);
  }, []);

  return (
    <div className="progress-bar" style={{border: '2px solid green', borderRadius: '12px', height: '24px'}}>
      <div className="progress" style={{ width: `${progress}%`, height: '20px', backgroundColor: '#4CAF50', borderRadius: '10px' }}></div>
    </div>
  );
};

export default ProgressBar;
