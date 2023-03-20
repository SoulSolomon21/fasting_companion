import React, { useState, useEffect } from "react";
import axios from "axios";

function Times() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.aladhan.com/v1/calendarByCity?city=Mukono&country=Uganda&method=1&month=4&year=2023"
      )
      .then((response) => {
        setSchedule(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Sehri and iftar Times, Mukono Uganda</h1>
      <ul>
        {schedule.map((day) => (
          <li key={day.date.readable}>
            <strong>Date:</strong> {day.date.readable}, <strong>Sehri:</strong> {day.timings.Fajr}, <strong>Iftar:</strong> {day.timings.Maghrib}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Times;
