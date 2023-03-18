import React from 'react';
import Versecard from './Versecard';

function Dashboard() {
  const [daysCompleted, setDaysCompleted] = React.useState(0);

  // calculate the number of days completed out of 30
  React.useEffect(() => {
    const dateStarted = new Date('2023-03-01'); // replace with actual start date
    const today = new Date();
    const daysElapsed = Math.floor((today - dateStarted) / (1000 * 60 * 60 * 24));
    const daysCompleted = daysElapsed > 30 ? 30 : daysElapsed;
    setDaysCompleted(daysCompleted);
  }, []);

  return (
    <div>
      <Versecard />
      <p>{daysCompleted} days completed out of 30</p>
    </div>
  );
}

export default Dashboard;
