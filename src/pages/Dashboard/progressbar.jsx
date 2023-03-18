import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Typography } from '@material-ui/core';
import { Event } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
  icon: {
    marginRight: '10px',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [daysRemaining, setDaysRemaining] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysRemaining(daysRemaining => daysRemaining - 1);
    }, 1000 * 60 * 60 * 24); // update every day

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = Math.round(((30 - daysRemaining) / 30) * 100);

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        <Event className={classes.icon} />
        Countdown Progress
      </Typography>
      <LinearProgress variant="determinate" value={progressPercentage} />
      <Typography variant="caption" gutterBottom>
        {daysRemaining} days remaining
      </Typography>
    </div>
  );
};

export default Dashboard;
