import React from "react";
import { useGlobalContext } from "../../Context";

function Times() {

  const { schedule } = useGlobalContext()

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
