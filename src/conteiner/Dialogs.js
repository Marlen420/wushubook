import React, { useState } from 'react'
import { Dialogs as BaseDialogs } from '../components/Dialogs/Dialogs.jsx'

const Dialogs = ({ items, }) => {
    const [inputValue, setValue] = useState('');

    const [filtred, setFiltredItems] = useState(Array.from(items))

    const onChangeInput = value => {
        console.log(value)

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