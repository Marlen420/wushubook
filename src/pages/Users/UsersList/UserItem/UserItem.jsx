import React from 'react';
import styles from './user.module.css';
import { Checkbox } from '../../../../components/index';
import { useDispatch } from 'react-redux';
import { Approve, EditIcon, UserDeleteIcon } from '../../../../images/inedex';
import { setDeleteId } from '../../../../redux/features/counter/usersSlice';
import getUnixTime from 'date-fns/esm/fp/getUnixTime/index';


const getTime = (date) => {
    if (!date) return null;
    let newDate = date.split('T');
    newDate = newDate[0];
    return newDate.replace(/-/g, '.');
}

const getRole = {
    'trainer': 'Тренер',
    'admin': 'Админ',
    'secretary': 'Секретарь',
    'judge': 'Судья'
}

const getName = (name) => {
    const str = name.split('');
    str[str.findIndex((i)=>i==='/')] = ' ';
    return str.join('');
}


const UserItem = ({item, isSelectedItem, onSelectItem, deleteUser, roleFilter, approveUser}) => {
    
    
    const handleDeleteItem = () => {
        deleteUser(item.id)
    }

    const handleAppriveUtem = () => approveUser(item.id);

    return (
        <div className={styles.item_holder + ' ' + (isSelectedItem(item.id) && styles.selected_item)}>
            <div className={styles.column_checkbox}>
                <div className={styles.checkbox_holder}>
                    <Checkbox
                        onSelectItem={()=>onSelectItem(item.id)}
                        checked={isSelectedItem(item.id)}
                        mode="select item"/>
                </div>
            </div>
            <p className={styles.item_column + ' ' + styles.column_id}>{item.id}</p>
            <p className={styles.item_column + ' ' + styles.column_name}>{getName(item.name)}</p>
            <p className={styles.item_column + ' ' + styles.column_role}>{getRole[item.role]}</p>
            <p className={styles.item_column + ' ' + styles.column_email}>{item.email}</p>
            <p className={styles.item_column + ' ' + styles.column_date}>{getTime(item.appointment_date)}</p>
            <p className={styles.item_column + ' ' + styles.column_options}>
                {roleFilter === 4
                ? <img 
                    className={styles.options_approve}
                    src={Approve}
                    onClick={handleAppriveUtem}
                    alt="edit"/>
                : <img 
                    className={styles.options_edit}
                    src={EditIcon}
                    alt="edit"/>}
                <img
                    onClick={handleDeleteItem}
                    className={styles.options_delete}
                    src={UserDeleteIcon} 
                    alt="edit"/>
            </p>
        </div>
    )
}

export default UserItem
