import React from 'react'
import DialogItem from '../components/DialogItem/index.jsx';

const getLobbyPhoto = (item) => item.lobby_photo;
const getDialogOption = (item, me, option) => {
    const partner = item.users_id.find((item)=>item.id !== me.id);
    return partner[option] === '' ? null : partner[option];
}

const Dialogs = ({ dialogsList, me, handleDialogClick }) => {
    return ( 
        <div >
            {dialogsList.map(item => (
                <DialogItem
                    key={item.lobby_info.lobby_id}
                    photo={item.direct ? getDialogOption(item, me, 'photo') : getLobbyPhoto(item.lobby_info)}
                    last_message={item.last_message.text}
                    name={item.direct ? getDialogOption(item, me, 'name').split('/').join(' ') : item.lobby_info.lobby_name}
                    id={item.lobby_info.lobby_id}
                    dialogClick={handleDialogClick}
                />
            ))}
        </div>
    )
}

export default Dialogs