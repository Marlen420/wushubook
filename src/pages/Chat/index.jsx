import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatLayout from './ChatLayout.jsx';
import { getDialogs } from '../../api/dialogs.js';


function Chat() {
    // Constants
    const dispatch = useDispatch();
    const { user } = useSelector(state=>state.profile);
    const { dialogs, currentDialog } = useSelector(state=>state.dialogs);
    
    // States
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('');

    
    // Functions
    const openChat = () => {
        setIsOpen(true)    
    }
    const closeChat = () => {
        setIsOpen(false)
    }
    const handleSearchChange = (e) => setSearch(e.target.value);

    // Effects
    useEffect(()=>{
        dispatch(getDialogs(user.id));
    }, [dispatch, user]);

    return (
        <ChatLayout
            me={user}
            isOpen={isOpen}
            closeChat={closeChat}
            search={search}
            setSearch={handleSearchChange}
            dialogsList={dialogs}
            currentDialog={currentDialog}/>
    )
}


export default Chat