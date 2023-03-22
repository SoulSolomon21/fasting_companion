import React, { useState, useEffect } from "react";
import './Times.css'
import CalendarCard from './Calendar'
import { useGlobalContext } from "../../context/Context";

function Times() {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  const { prayerTimes } = useGlobalContext()

  const today = new Date()
  const dateToday = prayerTimes.filter((date) => {
    if (date.event.toDateString() == today.toDateString()) {
      return (date)
    }
  })
  console.log(dateToday);

  useEffect(() => {
    if (dateToday.length) {
      const startTime = dateToday[0].start.toTimeString()
      const endTime = dateToday[0].end.toTimeString()
      console.log(endTime);
      console.log(startTime);
      setStart(startTime)
      setEnd(endTime)
    }
  }, [])
  
  return (
    <div className="Calendar_body">
      <CalendarCard />
      <div className="sideBar">
        <h4>Today's Schedule</h4>
        <p><b>Suhoor:</b> {start}</p>
        <p><b>Iftar:</b> {end}</p>
      </div>
    </div>
  );
}

export default Times;
