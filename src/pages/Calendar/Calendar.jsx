import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const tileClassName = ({ activeStartDate, date, view }) => {
    if (view === 'month' && date.toDateString() === new Date().toDateString()) {
      return 'today';
    } else {
      return '';
    }
  };
  
  return (
    <div style={{ height: '500px',width: '1000px' }}>
      <h1>Companion Calendar</h1>
      <Calendar
        value={date}
        onChange={handleDateChange}
        tileClassName={tileClassName}
      />
      <style>{`
        .today {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
}



export default Calendar