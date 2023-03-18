import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    const totalDuration = endDate.getTime() - startDate.getTime();
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startDate.getTime();
      const currentProgress = (elapsedTime / totalDuration) * 100;
      setProgress(currentProgress > 100 ? 100 : currentProgress);
      if (currentProgress >= 100) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%`, height: '20px', backgroundColor: '#4CAF50', borderRadius: '10px' }}></div>
    </div>
  );
};

export default ProgressBar;
