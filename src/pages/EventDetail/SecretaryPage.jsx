import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router';
import { getApplications } from '../../api/applications';
import EventHeader from './EventHeader/EventHeader';
import SecretaryTable from './SecretaryTable/SecretaryTable';
import Submissions from './Submissions/Submissions';

const getTable = () => {

}

const SecretaryPage = ({eventId, eventTitle}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, status } = useSelector(state=>state.applications);
    
    const [isTableOpen, setIsTableOpen] = useState(false);

    const handleCreateProtocol = () => console.log("Creating");
    const handleClubItemClick = (id) => navigate('/events/' + eventId + '/' + id);
    const handleUpdateApplication = () => {

    }

    useEffect(()=>{
        dispatch(getApplications(eventId));
    }, [dispatch])

    return (
        <div>
            {
                !isTableOpen &&
                <EventHeader
                        handleButtonClick={handleCreateProtocol}/>
            }
            <Routes>
                <Route path="/" element={<Submissions list={data || []} handleClubItemClick={handleClubItemClick} eventTitle={eventTitle}/>}/>
                <Route path="/:id" element={<SecretaryTable setIsTableOpen={setIsTableOpen} list={data} eventId={eventId} status={status}/>} />
            </Routes>
            {
                !isTableOpen &&
                <>
                    
                </>
            }
        </div>
    )
}

export default SecretaryPage;
