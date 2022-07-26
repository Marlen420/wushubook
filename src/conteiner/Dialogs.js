import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Dialogs as BaseDialogs } from '../components/Dialogs/Dialogs.jsx'

const Dialogs = () => {

    const { allUsers, status } = useSelector(state => state.chat)
    console.log("aall: ", allUsers)
    const [inputValue, setValue] = useState('');

    // const [filtred, setFiltredItems] = useState(Array.from(allUsers)) раньше было так 
    const [filtred, setFiltredItems] = useState(Array.from(allUsers))

    const onChangeInput = value => {

        setFiltredItems(allUsers.filter( //Это всё для ручной сортировки 
            dialog => dialog.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
        ))
        setValue(value)
    }

    console.log("filtred: ", filtred)
    return (
        <BaseDialogs
            items={allUsers}
            onSearch={onChangeInput} // это параметнр для поиска людей, но реализуем жто потом 
            inputValue={inputValue}
        // onSelectDialog={setCurrentDialog}
        />
    )
}

export default Dialogs