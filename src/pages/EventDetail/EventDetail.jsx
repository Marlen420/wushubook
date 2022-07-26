import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useParams } from 'react-router';
import { getEventById } from '../../api/event.api';
import Banner from './Banner/Banner';
import EventHeader from './EventHeader/EventHeader';
import Submissions from './Submissions/Submissions';
import Table from './Table';

const EventDetail = () => {
    // Constants
    const { id } = useParams();
    const { currentEvent, subList } = useSelector(state=>state.events);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Onload
    useEffect(()=>{
        dispatch(getEventById(id));
    }, [dispatch]);



    // Functions
    const handleClubItemClick = (itemId) => navigate('/events/' + id + '/table/' + itemId);

    const handleCreateProtocol = () => {
        console.log('Creating protocol');
    }

    return (
        <div style={{width: '96%', margin: 'auto', padding: '50px 0'}}>
            <Banner
                title={currentEvent?.title || null}
                startDate={currentEvent?.start || null}
                endDate={currentEvent?.end || null}
                startTime={currentEvent?.time?.split('-')[0] || null}
                deadline={currentEvent?.applicationDeadline}/>
            <EventHeader
                handleButtonClick={handleCreateProtocol}/>
            <Routes>
                <Route path="/table/:id" element={<Table/>} />
                <Route path="/" element={<Submissions list={subList || []} handleClubItemClick={handleClubItemClick}/>}/>
            </Routes>
        </div>
    )
}

export default EventDetail;