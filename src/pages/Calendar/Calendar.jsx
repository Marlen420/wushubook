import React, { useRef } from 'react';
import styles from './Calendar.module.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import NnLocale from '@fullcalendar/core/locales/ne';
import { useState } from 'react';
import CalendarModal from '../../components/Modals/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid'
import { StyleWrapper } from './stylesCalendar.js'
import { editEventCalendar } from '../../api/calendar';


function Calendar() {

    const { status, error, allEventForCalendar } = useSelector(state => state.calendar)

    const [active, setActive] = useState({ isOpen: false, date: null, idEventItem: null })
    const [state, setState] = useState({ events: [] })

    const dispatch = useDispatch()
    const calendarComponentRef = useRef();


    useEffect(() => {
        setState({ events: allEventForCalendar })
    }, [allEventForCalendar])

    const handleDateClick = (arg) => {
        setActive({ isOpen: true, date: arg.date, idEventItem: null })
    }


    const handleEventClick = (info) => {
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


    const handleEventDrop = (event) => {
        let valuesEdit = {
            id: Number(event.event._def.publicId),
            title: event.event.title,
            start: event.event.start,
            end: event.event.end,
            display: event.event.display,
            color: event.event.backgroundColor,
            textColor: event.event.textColor
        }
        dispatch(editEventCalendar(valuesEdit))
    }


    const handleMoreLinkContent = (arg) => {
        return 'Ещё ' + arg.num;
    }

    return (
        <div className={styles.content}>

            <h1 className={styles.content__title}> Календарь </h1>
            <div className={styles.content_calendar} >
                <StyleWrapper>
                    <FullCalendar

                        defaultView="dayGridMonth"
                        locale={NnLocale}

                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                        ref={calendarComponentRef}


                        headerToolbar={{
                            right: 'prev,next',
                            center: 'title',
                            left: '',

                        }}
                        views={{
                            dayGridMonth: {
                                titleFormat: { year: 'numeric', month: 'long' }
                            },
                            timeGrid: {
                                eventLimit: 3
                            }
                        }}

                        events={state.events}
                        contentHeight='650px'
                        eventTimeFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                        }}

                        displayEventEnd={true}
                        droppable={true}
                        eventLimit={true}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        eventDrop={handleEventDrop}
                        moreLinkContent={handleMoreLinkContent}
                    />

                </StyleWrapper>

            </div>

            {
                active && <CalendarModal idEventItem={active.idEventItem} active={active.isOpen} date={active.date}
                    setActive={setActive} />
            }

        </div >
    )
}


export default Calendar;