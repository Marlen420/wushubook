import React from 'react';
import { useDispatch } from 'react-redux';
import { Selected } from '../../images/inedex';
import { setSelectAll, setSelectItem, setUnselectAll, setUnselectItem } from '../../redux/features/counter/usersSlice';
import styles from './checkbox.module.css';


const Checkbox = ({
    checked=false, 
    mode="select item",
    usersList,
    item,
    ...props
}) => {

    const dispatch = useDispatch();

    // Functions
    const handleAllClick = () => {
        if (checked) dispatch(setUnselectAll(usersList));
        else dispatch(setSelectAll(usersList));
    }
    const handleItemClick = (e) => {
        if (checked) dispatch(setUnselectItem(item));
        else dispatch(setSelectItem(item))
    }
    return (
        <div 
        className={(checked && styles.active_holder) + ' ' + styles.holder}>
            <input
                onChange={mode === "select all" ? handleAllClick : handleItemClick}
                type="checkbox"
                checked={checked}
                {...props}/>
            {checked &&
            <img 
                src={Selected}
                alt="checked"/>}
        </div>
    )
}

export default Checkbox;
