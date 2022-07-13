import React from 'react';
import styles from './user.module.css';
import { Checkbox } from '../../../../components/index';
import { useDispatch } from 'react-redux';
import { EditIcon, UserDeleteIcon } from '../../../../images/inedex';
import { setDeleteId } from '../../../../redux/features/counter/usersSlice';

const getRole = {
    'trainer': 'Тренер'
}

const getName = (name) => {
    const str = name.split('');
    str[str.findIndex((i)=>i==='/')] = ' ';
    return str.join('');
}
const UserItem = ({item, isSelectedItem, onSelectItem}) => {
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(setDeleteId(item.id));
    }

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
            <p className={styles.item_column + ' ' + styles.column_date}>{item.appointment_date}</p>
            <p className={styles.item_column + ' ' + styles.column_options}>
                <img 
                    className={styles.options_edit}
                    src={EditIcon}
                    alt="edit"/>
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
