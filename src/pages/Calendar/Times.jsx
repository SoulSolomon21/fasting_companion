import React from "react";
import { useGlobalContext } from "../../context/Context";

function Times() {

  const { marchschedule,aprilschedule} = useGlobalContext()

  const schedule = aprilschedule.concat(marchschedule);//it matters how you concatenate the array
  console.log(schedule)

 const final=schedule.filter((day)=>{//day represents each element in the schedule array
  let days=new Date(day.date.readable)
  const begin=new Date('2023-03-23T00:00:00+03:00') //T00:00:00+03:00 is the time zone offset represents the difference in time between Coordinated Universal Time (UTC) and a specific location's time.
  const end=new Date('2023-04-21T23:59:59+03:00')
  

  return days>= begin && days<=end; 
  
  });

  console.log(final);
 

  return (
    <div>
      <h1>Sehri and iftar Times, Mukono Uganda</h1>
      <ul style={{ listStyleType: "disc", color: "white" }}>

{final.map((day) => (
  
          <li key={day.date.readable}>
            <strong style={{ color: "white" }}>Date:</strong> <span style={{ color: "white" }}>{day.date.readable}</span>, <strong style={{ color: "white" }}>Sehri:</strong> <span style={{ color: "white" }}>{day.timings.Fajr}</span>, <strong style={{ color: "white" }}>Iftar:</strong> <span style={{ color: "white" }}>{day.timings.Maghrib}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Times;
