import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Dialogs as BaseDialogs } from '../components/Dialogs/Dialogs.jsx'

const Dialogs = () => {

    const { items } = useSelector(state => state.dialogs)
    console.log("i: ", items)
    const [inputValue, setValue] = useState('');

    const [filtred, setFiltredItems] = useState(Array.from(items))

    const onChangeInput = value => {

        setFiltredItems(items.filter(
            dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
        ))
        setValue(value)
    }


    return (
        <BaseDialogs
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
        />
    )
}

export default Dialogs