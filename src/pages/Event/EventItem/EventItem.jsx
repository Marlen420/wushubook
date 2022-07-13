import React from 'react';
import { Checkbox } from '../../../components';
import { EditIcon, UserDeleteIcon } from '../../../images/inedex';
import { getDate } from '../../../utils';
import style from './eventItem.module.css';

const EventItem = ({
    isSelectedItem,
    onSelectItem,
    item,
    onDelete
}) => {

    const handleDeleteItem = () => onDelete(item.id);

    return (
        <div className={style.item_holder + ' ' + (isSelectedItem(item.id) && style.selected_item)}>
            <div className={style.column_checkbox}>
                <div className={style.checkbox_holder}>
                    <Checkbox
                        onSelectItem={()=>onSelectItem(item.id)}
                        checked={isSelectedItem(item.id)}
                        mode="select item"/>
                </div>
            </div>
            <p className={style.item_column + ' ' + style.column_name}>{item.title}</p>
            <p className={style.item_column + ' ' + style.column_date}>{getDate(item.date)}</p>
            <div className={style.item_column + ' ' + style.column_options}>
                <img 
                    className={style.options_edit}
                    src={EditIcon}
                    alt="edit"/>
                <img
                    onClick={handleDeleteItem}
                    className={style.options_delete}
                    src={UserDeleteIcon} 
                    alt="edit"/>
            </div>
        </div>
    )
}

export default EventItem