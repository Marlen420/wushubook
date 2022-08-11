import React, { useRef } from 'react';
import styles from './Calendar.module.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import nnLocale from '@fullcalendar/core/locales/ne';
import { useState } from 'react';
import CalendarModal from '../../components/Modals/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid'


function Calendar() {

    const { status, error, allEventForCalendar } = useSelector(state => state.calendar)
    console.log("allEventForCalendar: ", allEventForCalendar)


    const [active, setActive] = useState({ isOpen: false, date: null, data: null }) //data - данные
    console.log("calendarEvents: ", active.calendarEvents)


    const calendarComponentRef = useRef(); //

    const handleDateClick = (arg) => {
        console.log("arg: ", arg)
        setActive({ isOpen: true, data: null, date: arg.date })


    }




    return (
        <div className={styles.content}>

            <h1 className={styles.content__title}> Календарь </h1>
            <div className={styles.content_calendar} >

                <FullCalendar

                    locale={nnLocale}
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    ref={calendarComponentRef}

                    // themeSystem='bootstrap5'
                    initialView="dayGridMonth"


                    headerToolbar={{
                        right: 'prev,next',
                        center: 'title',
                        left: ''

                    }}
                    // eventTimeFormat={{ hour12: false }}
                    contentHeight='650px'

                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        // second: '2-digit',
                        // meridiem: false
                    }}

                    // dateClick={(id) => dateClick(id)}


                    events={allEventForCalendar}
                    // events={allEventForCalendar(calendarId)}

                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    dateClick={handleDateClick}
                // select={handleDateSelect}

                />
            </div>


            {
                active && <CalendarModal active={active.isOpen} date={active.date}
                    setActive={setActive} />
            }
        </div>
    )
}


export default Calendar;