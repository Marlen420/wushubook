import React, { useRef } from 'react';
import styles from './Calendar.module.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import NnLocale from '@fullcalendar/core/locales/ne';
import { useState } from 'react';
import CalendarModal from '../../components/Modals/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid'

import { FullCalendarWrapper } from './cs.js'




function Calendar() {

    const { status, error, allEventForCalendar } = useSelector(state => state.calendar)
    console.log("allEventForCalendar: ", allEventForCalendar)


    const [active, setActive] = useState({ isOpen: false, date: null, idEventItem: null }) //data - данные

    const dispatch = useDispatch()
    const calendarComponentRef = useRef(); //


    const [state, setState] = useState({ events: [] })

    useEffect(() => {
        setState({ events: allEventForCalendar })
    }, [allEventForCalendar])

    const handleDateClick = (arg) => {
        setActive({ isOpen: true, date: arg.date, idEventItem: null })
    }


    const handleEventClick = (info) => {

        console.log("in: ", info.event) // также от тужда можно вытащить  textColor, borderColor


        setActive({
            isOpen: true, idEventItem:
            {
                id: info.event.id,
                title: info.event.title,
                start: info.event.start,
                end: info.event.end,
                display: info.event.display,
                color: info.event.color
            },
            date: null
        })
    }

    const event = [
        {//Польный состав данных которые мне нужны
            id: 137,
            title: "gbgcd",
            city: null,
            start: '2022-08-03T14:30', // Надо время отображать так чтобы отображалось время

            end: '2022-08-05T18:30:00',
            display: "Background",
            textColor: 'rgb(111, 93,195)',
            color: "rgb(238, 234, 255)",
            allDay: false,
        },

    ]

    return (
        <div className={styles.content}>

            <h1 className={styles.content__title}> Календарь </h1>
            <div className={styles.content_calendar} >
                {/* <FullCalendarWrapper> */}
                <FullCalendar
                    defaultView="dayGridMonth"
                    locale={NnLocale}
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    ref={calendarComponentRef}
                    initialView="dayGridMonth"

                    headerToolbar={{
                        right: 'prev,next',
                        center: 'title',
                        left: ''

                    }}
                    views={{
                        dayGridMonth: {
                            titleFormat: { year: 'numeric', month: 'long' }

                        }
                    }}
                    contentHeight='650px'

                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        // second: '2-digit',
                        // meridiem: false
                    }}


                    events={event}
                    eventClick={handleEventClick}

                    displayEventEnd={true}

                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    dateClick={handleDateClick}
                // select={handleDateSelect}

                />
                {/* </FullCalendarWrapper> */}
            </div>


            {
                active && <CalendarModal idEventItem={active.idEventItem} active={active.isOpen} date={active.date}
                    setActive={setActive} />
            }
        </div >
    )
}


export default Calendar;