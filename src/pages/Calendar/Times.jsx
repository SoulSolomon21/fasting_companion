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
      <ul>

{final.map((day) => (
  
          <li key={day.date.readable}>
            <strong>Date:</strong> {day.date.readable}, <strong>Sehri:</strong> {day.timings.Fajr}, <strong>Iftar:</strong> {day.timings.Maghrib}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Times;
