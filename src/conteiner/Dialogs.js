import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Dialogs as BaseDialogs } from '../components/Dialogs/Dialogs.jsx'

const Dialogs = () => {

    const { allUsers, status } = useSelector(state => state.chat)

    const [inputValue, setValue] = useState('');


    const [filtred, setFiltredItems] = useState(Array.from(allUsers))

    const onChangeInput = value => {

        setFiltredItems(allUsers.filter(
            dialog => dialog.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
        ))
        setValue(value)
    }


    return (
        <BaseDialogs
            items={allUsers}
            onSearch={onChangeInput}
            inputValue={inputValue}

        />
    )
}

export default Dialogs