import React from "react";
import './Times.css'
import CalendarCard from './Calendar'
import { useGlobalContext } from "../../context/Context";

function Times() {

  const { schedule } = useGlobalContext()

  return (
    <div className="Calendar_body">
      {/* <div className="Calendar">
        <h1>Sehri and iftar Times, Mukono Uganda</h1>
        <ul style={{ listStyleType: "disc", color: "white" }}>
          {schedule.map((day) => (
            <li key={day.date.readable}>
              <strong style={{ color: "white" }}>Date:</strong> <span style={{ color: "white" }}>{day.date.readable}</span>, <strong style={{ color: "white" }}>Sehri:</strong> <span style={{ color: "white" }}>{day.timings.Fajr}</span>, <strong style={{ color: "white" }}>Iftar:</strong> <span style={{ color: "white" }}>{day.timings.Maghrib}</span>
            </li>
          ))}
        </ul>
      </div> */}
      <CalendarCard />
      <div className="sideBar">this is the sidebar component</div>
    </div>
  );
}

export default Times;
