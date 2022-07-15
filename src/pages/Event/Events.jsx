import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setSelectAll, setSelectItem, setUnselectAll, setUnselectItem } from "../../redux/features/counter/eventSlice";
import EventHeader from "./EventHeader/EventHeader";
import EventList from "./EventList/EventList";
import styles from './Events.module.css';
import { usePagination } from '../../hooks/usePagination/usePagination';
import { useCallback } from "react";
import { useEffect } from "react";
import { createNewEvent, deleteEvent, setNewEventsList, setPastEventsList } from "../../api/event.api";
import NewEvent from "./NewEvent/NewEvent";

//Мероприятия
const perPage = 3;

function Events() {
    // Constants
    const { newEvents, pastEvents, selected, status, error } = useSelector(state=>state.events);
    const dispatch = useDispatch();

    // Hooks
    const { 
        currentData, 
        currentPage,
        maxPage, 
        jump,
        next,
        prev
    } = usePagination(([...newEvents || [], ...pastEvents || []]), perPage);


    // States
    const [isNewEvent, setIsNewEvent] = useState(false);
    const [eventName, setEventName] = useState('');
    const [eventCity, setEventCity] = useState('');
    const [eventDate, setEventDate] = useState('');
    
    // Onload
    useEffect(()=>{
        dispatch(setPastEventsList());
        dispatch(setNewEventsList());
    }, [dispatch])
    
    useEffect(()=>{
        if (status === 'Deleted event') {
            dispatch(setStatus('Active'));    
            dispatch(setPastEventsList());
            dispatch(setNewEventsList());
        }
        if (status === 'Created new event') {
            setIsNewEvent(false);
            dispatch(setStatus('Active'));    
            dispatch(setPastEventsList());
            dispatch(setNewEventsList());
        }
    }, [status, dispatch])

    // Functions
    const handleEventNameChange = (e) => setEventName(e.target.value);
    const handleEventCityChange = (e) => setEventCity(e.target.value);
    const handleEventDateChange = (e) => setEventDate(e.target.value);

    const handleCloseNewEvent = useCallback(() => setIsNewEvent(false), []);

    const handleDeleteEvent = (id) =>  dispatch(deleteEvent(id));

    const isSelectedItem = useCallback((id) => {
        if (selected.length === 0) return false;
        for (let i of selected){
            if (i === id) return  true;
        }
        return false;
    }, [selected]);
    
    const isSelectedAll = useCallback(() => {
        if (currentData().length === 0) return false;
        for (let i of currentData()) {
            if (!selected.includes(i.id)) return false;
        }
        return true;
    }, [selected, currentData])

    const getAllId = useCallback(() => currentData().map(item=>item.id), [currentData]);

    const onSelectItem = useCallback((id) => isSelectedItem(id) ? dispatch(setUnselectItem(id)) : dispatch(setSelectItem(id)), [dispatch, isSelectedItem])
    const onSelectAll = useCallback(() => isSelectedAll() ? dispatch(setUnselectAll()) : dispatch(setSelectAll(getAllId())), [dispatch, isSelectedAll, getAllId])

    const handleNewEventOpen = useCallback(() => {
        setIsNewEvent(true);
    }, []);

    const handleAddNewEvent = useCallback((e)=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(createNewEvent({title: eventName, city: eventCity, date: eventDate}))
    }, [eventName, eventCity, eventDate, dispatch])

    return (
        <div className={styles.content} >
            {isNewEvent &&
            <NewEvent
                status={status}
                error={error}
                date={eventDate}
                setDate={handleEventDateChange}
                name={eventName}
                city={eventCity}
                setName={handleEventNameChange}
                setCity={handleEventCityChange}
                handleSubmit={handleAddNewEvent}
                closeWindow={handleCloseNewEvent}/>}
            <EventHeader
                handleNewEvent={handleNewEventOpen}/>
            <EventList
                selected={selected}
                isSelectedAll={isSelectedAll}
                isSelectedItem={isSelectedItem}
                onSelectItem={onSelectItem}
                onSelectAll={onSelectAll}
                currentData={currentData}
                currentPage={currentPage}
                maxPage={maxPage}
                perPage={perPage}
                jump={jump}
                prev={prev}
                next={next}
                onDelete={handleDeleteEvent}/>
        </div>
    )
}

export default Events;