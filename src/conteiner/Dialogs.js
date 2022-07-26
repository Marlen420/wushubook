import React from 'react'
import DialogItem from '../components/DialogItem/index.jsx';

const Dialogs = ({ dialogsList, me }) => {

    return ( 
        <div >
            {dialogsList.map(item => (

                <DialogItem
                    key={item.id}
                    user={item.authorId === me.id ? item.authorId : item.partnerId}
                    unreaded={item.user || null}
                    message={item || ''}

                />
            ))}
        </div>
    )
}

export default Dialogs