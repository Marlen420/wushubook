import React from 'react'
import DialogItem from '../components/DialogItem/index.jsx';

const Dialogs = ({ dialogsList, me, handleDialogClick }) => {

    return ( 
        <div >
            {dialogsList.map(item => (
                <DialogItem
                    key={item.lobby_id}
                    user={item['author.id'] === me.id ? item['partner.name'] : item['author.name']}
                    unreaded={item.user || null}
                    message={item || ''}
                    id={item.direct_id}
                    dialogClick={handleDialogClick}
                />
            ))}
        </div>
    )
}

export default Dialogs