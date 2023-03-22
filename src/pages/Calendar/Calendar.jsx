import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarStyles.css'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales:{
        'en-US': enUS,
    },
})

const CalendarCard = () => {
    return(
        <div className='calendar-card' style = {{width: '100%'}}>
            <Calendar 
            localizer={localizer}
            // events={events}
            startAccessor="start"
            endAccessor="end" 
            style={{height:'100%'}}
            views={{
                month:true,
                day:false,
                week:false,
                agenda:false,
            }}
            defaultView='month'
            // onSelectSlot={}       
            />
        </div>
    )
}

export default CalendarCard