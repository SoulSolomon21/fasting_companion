import React, { useState, useEffect } from 'react';
import Versecard from './Versecard';//functional components
import ProgressBar from './progressbar';
import './dashboard.css'

function Dashboard() {
  const [daysCompleted, setDaysCompleted] = useState(0);

  // calculate the number of days completed out of 30
  useEffect(() => {
    const dateStarted = new Date('2023-03-23'); // replace with actual start date
    const today = new Date();//creating a new date object with current date and time 
    const daysElapsed = Math.floor((today - dateStarted) / (1000 * 60 * 60 * 24));
    const daysCompleted = daysElapsed > 30 ? 30 : daysElapsed;  /*if days elapsed is greater than 30 leave days elapsed to 30 if days are less set days elapsed to days completed       */
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
    </div>
  );
}

export default Dashboard;
