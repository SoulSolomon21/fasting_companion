import React, { useState, useEffect } from 'react';
import Versecard from './Versecard';
import ProgressBar from './progressbar';
import './dashboard.css'

function Dashboard() {
  const [daysCompleted, setDaysCompleted] = useState(0);

  // calculate the number of days completed out of 30
  useEffect(() => {
    const dateStarted = new Date('2023-03-23'); // replace with actual start date
    const today = new Date();
    const daysElapsed = Math.floor((today - dateStarted) / (1000 * 60 * 60 * 24));
    const daysCompleted = daysElapsed > 30 ? 30 : daysElapsed;
    if (daysCompleted > 0) {
      setDaysCompleted(daysCompleted);
    } else {
      setDaysCompleted(0);
    }
  }, []);


  return (
    <div>
      <ProgressBar />
      <h1 >{daysCompleted} days completed out of 30</h1>
      <div className="verses">
        <Versecard />
      </div>
      <style>
     
      </style>
    </div>
  );
}

export default Dashboard;
