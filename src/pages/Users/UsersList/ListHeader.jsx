import React from 'react'
import { Checkbox } from '../../../components'
import styles from './list.module.css';

const isSelectedAll = (usersList, selectedList) => {
    if (usersList.length === 0) return false;
    return usersList.length === selectedList.length ? true : false;
}

const ListHeader = ({users, selected}) => {
    return (
        <div className={styles.list_header}>
                    <div className={styles.header_checkbox}>
                        <div className={styles.checkbox_holder}>
                            <Checkbox
                                checked={isSelectedAll(users.current, selected)}
                                usersList={users?.current}
                                mode="select all"/>
                        </div>
                    </div>
                    <div className={styles.header_id}>
                        <p className={styles.header_title}>ID</p>
                    </div>
                    <div className={styles.header_name}> 
                        <p className={styles.header_title}>ФИО</p>
                    </div>
                    <div className={styles.header_role}>
                        <p className={styles.header_title}>Роль</p>
                    </div>
                    <div className={styles.header_email}>
                        <p className={styles.header_title}>Почта</p>
                    </div>
                    <div className={styles.header_date}>
                        <p className={styles.header_title}>Дата назначения</p>
                    </div>
                    <div className={styles.header_options}></div>
                </div>
    )
}

export default ListHeader
