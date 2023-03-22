import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarStyles.css'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useGlobalContext } from '../../context/Context'
import { useState, useEffect } from 'react'

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: {
        'en-US': enUS,
    },
})


const CalendarCard = () => {
    const [selectedSlot, setSelectedSlot] = useState({})

    const { prayerTimes } = useGlobalContext()

    function handleSelectSlot({ start, end }) {
        // setSelectedSlot(slotInfo)
        console.log(start, end);
        // console.log(slotInfo)
    }

    const today = new Date()
    useEffect(() => {
        const dateToday = prayerTimes.filter((date) => {
            date.event.toDateString() == today.toDateString()
        })
        setSelectedSlot(dateToday[0])
    }, [])

    return (
        <div className='calendar-card' style={{ width: '100%' }}>
            <Calendar
                localizer={localizer}
                events={prayerTimes}
                selectable={true}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                views={{
                    month: true,
                    day: false,
                    week: false,
                    agenda: false,
                }}
                defaultView='month'
                onSelectSlot={handleSelectSlot}
            />
        </div>
    )
}

export default CalendarCard